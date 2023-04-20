import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs'
import { LocationService, Location } from '../services/location.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface LocationId {
  _id?: string;
  name?: string;
  address?: string;
  image?: string;
  managerNumber?: Number;
  email?: string;
}

export interface DialogData {
  ingredient: {
    _id: string;
    name: string;
    image?: string;
    quantity?: Number;
  };
  location: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  selectedOption = '64401ef1012f7d87438755ca';
  public locations$: Observable<Location[]>;

  isNavbarCollapsed = false;
  screenWidth = 0;
  selected = 'option2';
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }


  constructor(private locationService: LocationService, private http: HttpClient, public dialog: MatDialog) {
    this.loadLocation(this.selectedOption);
    this.loadIngredients(this.selectedOption, "");


  }
  selectedIngredient: any = {};

  openDialog(data2: any): void {
    console.log(data2)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {

      data: { ingredient: data2, location: this.selectedOption },
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocations();

    this.locations$.subscribe((locations) => {
      // console.log(locations);
    })
    this.locationService.init()
  }


  location: LocationId = {};
  loadLocation(id: any) {
    this.http
      .get("http://localhost:3000/api/location/" + id)
      .subscribe((loca: any) => {
        console.log(loca);
        this.location = loca;
      })
  }
  updateLocation($event: any) {
    // console.log($event.value);
    this.selectedOption = $event.value;
    this.loadLocation(this.selectedOption)
    this.loadIngredients(this.selectedOption, "")
  }

  ingredients: any[] = [];

  loadIngredients(id: any, category: any) {
    this.http
      .get("http://localhost:3000/api/ingredients/" + id + "/" + category)
      .subscribe((loadingredients: any) => {
        console.log(loadingredients);

        this.ingredients = loadingredients;
      })
  }
  updateAll() {
    this.loadLocation(this.selectedOption)

    this.loadIngredients(this.selectedOption, this.selected);
  }

  updateIngredient($event: any) {
    // console.log($event.value);
    this.selected = $event.value;
    this.updateAll()

  }
}



@Component({
  selector: 'inventorymodal.component',
  templateUrl: 'inventorymodal.component.html',
  styleUrls: ['./inventorymodal.component.scss']
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpClient,
  ) { }
  ngOnInit(): void {
    console.log(this.data)
    let ingredientsData = []
    console.log(this.ingredientsHold);
  }
  ingredientsHold: any = [];
  ingredientMissing: any = true;
  ingredientsAvaliable?: any = [];
  ingredientSingle: any = {};

  loadIngredients(id: any, category: any) {
    this.http
      .get("http://localhost:3000/api/ingredientsname/" + id + "/" + category)
      .subscribe((loadingredients: any) => {
        console.log(loadingredients[0]);
        this.ingredientsHold.push(loadingredients[0])
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  create(data: any): void {
    const body = {};
    const options = {

    };
    console.log(data);
    let qu = data.quantity
    qu = qu + 1
    this.http
      .patch("http://localhost:3000/api/updateingredientq/" + data._id + "/" + qu, body, options)
      .subscribe((loadingredients: any) => {
        console.log(loadingredients)
      })


    this.dialogRef.close();
  }
}