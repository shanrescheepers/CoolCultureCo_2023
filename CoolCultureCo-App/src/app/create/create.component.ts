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

export interface DialogData {
  gelato: {
    _id: string;
    name: string;
    ingredients: [];
    image?: string;
    quantity?: Number;
  };
  location: string;
}


interface LocationId {
  _id?: string;
  name?: string;
  address?: string;
  image?: string;
  managerNumber?: Number;
  email?: string;
}

interface Gelato {
  _id: string;
  name: string;
  ingredients: string;
  image?: string;
  quantity?: Number;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  selectedOption = '64401ef1012f7d87438755ca';
  public locations$: Observable<Location[]>;
  animal: string;
  name: string;

  isNavbarCollapsed = false;
  screenWidth = 0;
  selected = '';
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }
  constructor(private locationService: LocationService, private http: HttpClient, public dialog: MatDialog) {
    this.loadLocation(this.selectedOption);
    this.loadIngredients(this.selectedOption, "");
    this.loadGelato(this.selectedOption, "")

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { gelato: this.selectedGelatos, location: this.selectedOption },
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
    this.updateAll()

  }

  updateIngredient($event: any) {
    // console.log($event.value);
    this.selected = $event.value;
    this.updateAll()
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

  gelatos: any[] = [];

  loadGelato(id: any, category: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id + "/" + category)
      .subscribe((gelatos: any) => {
        this.gelatos = gelatos;
      })
  }

  updateAll() {
    this.loadLocation(this.selectedOption)

    this.loadGelato(this.selectedOption, this.selected);
  }

  selectedGelatos: any = {};

  loadSelectedGelato(id: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id)
      .subscribe((selectedGelatos: any) => {
        console.log(selectedGelatos)
        this.selectedGelatos = selectedGelatos;
      })
  }

  gelatoSelect(id: any) {
    console.log(id);
    this.selectedGelatos = id;

  }


}


@Component({
  selector: 'creategelatomodal.component',
  templateUrl: 'creategelatomodal.component.html',
  styleUrls: ['./creategelatomodal.component.scss']
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpClient,
  ) { }
  ngOnInit(): void {
    console.log(this.data)
    let ingredientsData = []

    for (let i = 0; i < this.data.gelato.ingredients.length; i++) {
      const element = this.data.gelato.ingredients[i];
      this.loadIngredients(this.data.location, encodeURIComponent(element))
    }

    console.log(this.ingredientsAvaliable);

  }

  ingredientsAvaliable: any = [];
  ingredientSingle: any = {};

  loadIngredients(id: any, category: any) {
    let newdata = {}
    this.http
      .get("http://localhost:3000/api/ingredientsname/" + id + "/" + category)
      .subscribe((loadingredients: any) => {
        console.log(loadingredients[0]);
        this.ingredientsAvaliable.push(loadingredients[0])
      })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  create(): void {
    this.dialogRef.close();
  }
}
