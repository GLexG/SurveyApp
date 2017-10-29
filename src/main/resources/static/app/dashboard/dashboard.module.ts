import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {SidebarModule} from "../sidebar/sidebar.module";
import {NavbarModule} from "../shared/navbar/navbar.module";
import {FooterModule} from "../shared/footer/footer.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UpgradeComponent} from "./upgrade/upgrade.component";
// import {TestComponent} from "./test/test.component";
import {MapsComponent} from "./maps/maps.component";
import {TypographyComponent} from "./typography/typography.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {IconsComponent} from "./icons/icons.component";
import {TableComponent} from "./table/table.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard.component";
// import {TestModule} from "./test/test.module";
import {CommonModule} from "@angular/common";
import {Test2Module} from "../test2/test2.module";

import {NewsurveyModule} from "./newsurvey/newsurvey.module";
import {AllsurveysModule} from "./allsurveys/allsurveys.module";

@NgModule({
    imports: [
        NewsurveyModule,
        AllsurveysModule,
        CommonModule,
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
