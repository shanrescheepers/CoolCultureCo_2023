import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { UserauthComponent } from './userauth/userauth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreateComponent } from './create/create.component';

import { AuthenticationQuestionsComponent } from './authentication-questions/authentication-questions.component';
import { LandingComponent } from './landing/landing.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from 'src/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserauthComponent,
    DashboardComponent,
    InventoryComponent,
    CreateComponent,
    AuthenticationQuestionsComponent,
    LandingComponent,
    FourohfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
