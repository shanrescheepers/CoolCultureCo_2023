import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LocationService, Location, selectedLocation } from '../services/location.service';


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
  selectedOption = '643f0566e625d71d4fab844f';
  public locations$: Observable<Location[]>;
  public selectedlocation$: Observable<selectedLocation[]>;

  isNavbarCollapsed = false;
  screenWidth = 0;
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }



  constructor(private locationService: LocationService, private http: HttpClient) {
    this.loadGelato("asd")
  }

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocations();
    this.selectedlocation$ = this.locationService.getLocation();

    this.locationService.setLocation(this.selectedOption);

    this.locations$.subscribe((locations) => {
      // console.log(locations);
    })

    this.selectedlocation$.subscribe((selectedlocation) => {
      console.log(selectedlocation);
    })



    // this.locations$.subscribe((locations) => {
    //   console.log(locations);
    // })

    this.locationService.init()
  }


  gelatos: any[] = [];

  loadGelato(category: any) {
    this.http
      .get("http://localhost:3000/api/gelatos/asd/" + category)
      .subscribe((gelatos: any) => {
        // console.log(gelatos);

        this.gelatos = gelatos;
      })
  }


}
