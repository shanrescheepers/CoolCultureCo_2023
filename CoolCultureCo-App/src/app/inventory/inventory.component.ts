import { Component, OnInit } from '@angular/core';

interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
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
