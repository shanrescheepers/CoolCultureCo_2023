import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { navbarData } from './nav-data';
import { MatIconModule } from '@angular/material/icon';
import { url } from 'inspector';

// import { EventEmitter } from 'stream';

interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() onToggleNavbar: EventEmitter<NavbarToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  // listOfData = [{ value: "🤓" }, { value: "😎" }, { value: "🤩" }]
  // icons = [{ value: imageUrl("../../assets/icons/create.svg") },];
  // create = imageUrl("../../assets/icons/create.svg");

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleNavbar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeNavbar(): void {
    this.collapsed = false;
    this.onToggleNavbar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function imageUrl(arg0: string) {
  throw new Error('Function not implemented.');
}


