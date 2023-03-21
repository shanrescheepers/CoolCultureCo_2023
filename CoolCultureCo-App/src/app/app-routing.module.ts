import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { InventoryComponent } from './inventory/inventory.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { UserauthComponent } from './userauth/userauth.component';
import { AuthenticationQuestionsComponent } from './authentication-questions/authentication-questions.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';

const routes: Routes = [
  // Pages
  // Landing Page 
  { path: '', component: LandingComponent },
  { path: 'authentication', component: AuthenticationQuestionsComponent },
  // Employee Stocktake Dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'creategelato', component: CreateComponent },
  // Components in Pages
  //Wild Card Route for 404 request
  {
    path: '**', pathMatch: 'full',
    component: FourohfourComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
