// import { NgModule }      from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppModule } from '../../app.module';
// import { AppComponent } from '../../app.component';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { TestComponent }   from './test.component';
// import {DashboardModule} from "../dashboard.module";

// @NgModule({
//     imports:      [ ReactiveFormsModule, FormsModule,DashboardModule,CommonModule ],
//     declarations: [ TestComponent ],
//     bootstrap:    [ TestComponent ],
//     exports: [ TestComponent ]
// })
//
// export class TestModule { }

// app.module.ts

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

import { TestComponent }   from './test.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports:      [ FormsModule,FormControl,FormGroup, ReactiveFormsModule,CommonModule ],
    declarations: [ TestComponent ],
    bootstrap:    [ TestComponent ]
})

export class TestModule { }



