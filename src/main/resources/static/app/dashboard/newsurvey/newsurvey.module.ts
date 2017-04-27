import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsurveyComponent }  from './newsurvey.component';

import { ContractComponent } from './contract.component';
import { EmailComponent } from './email.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LtextComponent} from "./answertype/ltext.component";
import {NumberComponent} from "./answertype/number.component";

import {CheckboxComponent} from "./answertype/checkbox.component";
import {StextComponent} from "./answertype/stext.component";
import {RadioComponent} from "./answertype/radio.component";
import {DateComponent} from "./answertype/date.component";



@NgModule({
  imports:      [ 
    // BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewsurveyComponent,
    ContractComponent,
    EmailComponent,
    LtextComponent,
    StextComponent,
    NumberComponent,
    CheckboxComponent,
    RadioComponent,
    DateComponent
  ],
  bootstrap:    [ NewsurveyComponent ]
})
export class NewsurveyModule { }
