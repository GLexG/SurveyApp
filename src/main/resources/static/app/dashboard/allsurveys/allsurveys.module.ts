import {NgModule} from "@angular/core";
import {AllsurveysComponent} from "./allsurveys.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import {ColumnComponent} from "./column.component";
import {DatatableComponent} from "./datatable.component";

@NgModule({
    imports:      [
        // BrowserModule,
        RouterModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AllsurveysComponent,
        DatatableComponent,
        ColumnComponent

    ],
    bootstrap:    [ AllsurveysComponent ]
})
export class AllsurveysModule{ }