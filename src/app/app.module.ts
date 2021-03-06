import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { Component, OnInit, Input, ViewChild } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
