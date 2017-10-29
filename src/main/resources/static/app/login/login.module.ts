import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { LoginComponent }  from './login.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {HttpModule} from "@angular/http";

@NgModule({
    imports:[
        HttpModule,
        BrowserModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
    ],
    bootstrap:    [ LoginComponent ]
})
export class LoginModule { }
