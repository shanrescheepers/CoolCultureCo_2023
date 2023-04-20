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
  selector: 'app-dashboard',
  templateUrl: '././dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  selectedOption = '64401ef1012f7d87438755ca';
  public locations$: Observable<Location[]>;

  isNavbarCollapsed = false;
  screenWidth = 0;
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }

  constructor(private locationService: LocationService, private http: HttpClient) {
    this.loadGelato(this.selectedOption)
    this.loadLocation(this.selectedOption);
    this.loadCerealGelato(this.selectedOption);
    this.loadOriginalGelato(this.selectedOption);

    this.loadCandyGelato(this.selectedOption)
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

  gelatos: any[] = [];
  cerealGelatos: any[] = [];
  candyGelatos: any[] = [];
  originalGelatos: any[] = [];


  loadGelato(id: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id)
      .subscribe((gelatos: any) => {
        this.gelatos = gelatos;
      })
  }
  loadCerealGelato(id: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id + "/cerealChurn")
      .subscribe((gelatos: any) => {
        console.log(gelatos);

        this.cerealGelatos = gelatos;
      })
  }

  loadCandyGelato(id: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id + "/candyChurn")
      .subscribe((gelatos: any) => {
        console.log(gelatos);

        this.candyGelatos = gelatos;
      })
  }
  loadOriginalGelato(id: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/" + id + "/originalChurn")
      .subscribe((gelatos: any) => {
        console.log(gelatos);

        this.originalGelatos = gelatos;
      })
  }

  updateLocation($event: any) {
    // console.log($event.value);
    this.selectedOption = $event.value;
    this.loadGelato(this.selectedOption)
    this.loadLocation(this.selectedOption);
    this.loadCerealGelato(this.selectedOption);
    this.loadOriginalGelato(this.selectedOption);
    this.loadCandyGelato(this.selectedOption)
  }

}
