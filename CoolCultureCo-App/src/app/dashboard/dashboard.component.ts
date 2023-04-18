import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService, Location } from '../services/location.service';
import { Observable } from 'rxjs'


interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: '././dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  public locations$!: Observable<Location[]>;

  isNavbarCollapsed = false;
  screenWidth = 0;
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }



  constructor(private http: HttpClient, private locationService: LocationService) {
    this.loadLocations()
    this.loadGelato("asd")
  }

  ngOnInit(): void {

  }
  locations: any[] = [];
  loadLocations() {
    this.http
      .get("http://localhost:3000/api/locations")
      .subscribe((locations: any) => {
        console.log(locations);

        this.locations = locations;

      })
  }

  gelatos: any[] = [];
  locationId = "643edbbd23927cccb0aaab39";

  loadGelato(category: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/asd/" + category)
      .subscribe((gelatos: any) => {
        console.log(gelatos);

        this.gelatos = gelatos;
      })
  }


}
