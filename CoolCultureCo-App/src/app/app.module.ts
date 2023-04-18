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
import { MatFormField } from '@angular/material/form-field';
import { AuthenticationQuestionsComponent } from './authentication-questions/authentication-questions.component';
import { LandingComponent } from './landing/landing.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from 'src/material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FourohfourComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MaterialModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
