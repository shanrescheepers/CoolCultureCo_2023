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
import { ChillaxCornerComponent } from './chillax-corner/chillax-corner.component';
import { VanillaVillaComponent } from './vanilla-villa/vanilla-villa.component';
import { CoolCultureCornerComponent } from './cool-culture-corner/cool-culture-corner.component';
import { AuthenticationQuestionsComponent } from './authentication-questions/authentication-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserauthComponent,
    DashboardComponent,
    InventoryComponent,
    CreateComponent,
    ChillaxCornerComponent,
    VanillaVillaComponent,
    CoolCultureCornerComponent,
    AuthenticationQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
