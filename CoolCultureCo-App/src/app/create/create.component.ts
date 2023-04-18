import { Component, OnInit } from '@angular/core';

interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}
interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  isNavbarCollapsed = false;
  screenWidth = 0;
  selected = 'option2';
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }
  constructor() { }

  ngOnInit(): void {
  }
  locations: Location[] = [
    { value: 'Cool Culture', viewValue: 'Cool Culture' },
    { value: 'Chill Corner', viewValue: 'Chill Corner' },
    { value: 'Smooth Street', viewValue: 'Smooth Stree' },
  ];

}
