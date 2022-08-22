import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './comps/dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
