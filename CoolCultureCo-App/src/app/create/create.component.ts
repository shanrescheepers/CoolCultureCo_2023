import { Component, OnInit } from '@angular/core';

interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  isNavbarCollapsed = false;
  screenWidth = 0;
  onToggleNavbar(data: NavbarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
