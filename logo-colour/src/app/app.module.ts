import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconCardComponent } from './dashboard/icon-card/icon-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      IconCardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FlexLayoutModule,
      BrowserAnimationsModule,
      ClipboardModule,
      MatSnackBarModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
   ],
   exports: [IconCardComponent],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
