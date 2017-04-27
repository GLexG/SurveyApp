import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';


//=================================== LEON ===================================
import { LoginComponent } from "./login/login.component";
// import { LoginModule} from './login/login.module';

//=================================== LEON ===================================

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ErrorComponent} from "./error/error.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {TableComponent} from "./dashboard/table/table.component";
import {RegisterComponent} from "./register/register.component";
import {Test2Component} from "./test2/test2.component";



const appRoutes: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent},
        { path: '**', redirectTo: 'error', pathMatch: 'full' },
        { path: 'test2', component: Test2Component },
        { path: 'dashboard', component: DashboardComponent}
    ];


@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '', component: LoginComponent},
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent},
            { path: 'dashboard', component: DashboardComponent},
            // { path: 'error', component: ErrorComponent}
            { path: '**', component: ErrorComponent }

        ])
    ],

    declarations: [ AppComponent ,LoginComponent,RegisterComponent, ErrorComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

// children: [
//     { path: 'home', component: HomeComponent },
//     { path: 'table', component: TableComponent},