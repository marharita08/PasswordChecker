import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import {FormComponent} from "./components/form/form.component";
import {GridComponent} from "./components/grid/grid.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
