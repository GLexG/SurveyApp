import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Test2Component }   from './test2.component';
import { AddressComponent } from './adress.component';

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,CommonModule ],
    declarations: [ Test2Component, AddressComponent ],
    bootstrap:    [ Test2Component ]
})

export class Test2Module { }