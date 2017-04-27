import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {FooterModule} from "../shared/footer/footer.module";
import {NavbarModule} from "../shared/navbar/navbar.module";
import {SidebarModule} from "../sidebar/sidebar.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        SidebarModule,
        NavbarModule,
        FooterModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}

