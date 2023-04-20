import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LocationService, Location } from '../services/location.service';


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

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  selectedOption = '64401ef1012f7d87438755ca';
  public locations$: Observable<Location[]>;

  isNavbarCollapsed = false;
  screenWidth = 0;
  selected = '';
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }
  constructor(private locationService: LocationService, private http: HttpClient) {
    this.loadLocation(this.selectedOption);
    this.loadIngredients(this.selectedOption, "");
    this.loadGelato(this.selectedOption, "")


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

  selectedGelatos: any[] = [];

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

  }


}
