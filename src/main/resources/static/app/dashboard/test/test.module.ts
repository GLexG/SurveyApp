import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
    imports:      [
        // BrowserModule,
        RouterModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        TestComponent,

    ],
    bootstrap:    [ TestComponent ]
})
export class TestModule{ }