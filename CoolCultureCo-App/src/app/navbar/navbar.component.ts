import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
