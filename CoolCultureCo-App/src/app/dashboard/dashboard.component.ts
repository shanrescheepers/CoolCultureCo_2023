import { Component, OnInit } from '@angular/core';

interface Location {
  value: string;
  viewValue: string;
}

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

  isNavbarCollapsed = false;
  screenWidth = 0;
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }

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
