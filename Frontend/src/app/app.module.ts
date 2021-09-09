import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';

const appRoutes:Routes=[
      {
        path:'add-property',component:AddPropertyComponent,
      },
      {
        path:'proporty-card',component:PropertyCardComponent
      },
      {
        path:'proporty-list',component:PropertyListComponent
      }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PropertyListComponent,
    PropertyCardComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
