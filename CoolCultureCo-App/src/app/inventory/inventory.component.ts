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
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
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
  locations: any[] = [];
}
