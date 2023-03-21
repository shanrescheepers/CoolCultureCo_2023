import { Component, OnInit } from '@angular/core';

interface Location {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: '././dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  locations: Location[] = [
    { value: 'Cool Culture', viewValue: 'Cool Culture' },
    { value: 'Chill Corner', viewValue: 'Chill Corner' },
    { value: 'Smooth Street', viewValue: 'Smooth Stree' },
  ];
}
