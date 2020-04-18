import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconCardComponent } from './dashboard/icon-card/icon-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      IconCardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FlexLayoutModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }