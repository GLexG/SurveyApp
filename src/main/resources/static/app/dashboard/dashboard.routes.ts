import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TestComponent } from "./test/test.component";
import {Test2Component} from "../test2/test2.component";
import {NewsurveyComponent} from "./newsurvey/newsurvey.component";
import {AllsurveysComponent} from "./allsurveys/allsurveys.component";
// import {DatatableComponent} from "./datatable/datatable.component";
// import {NgxComponent} from "./ngxdatatable/ngx.component";

// import {TableDemoComponent} from "./tabledemo/table-demo";


// export const MODULE_ROUTES: Route[] =[
//     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//     { path: 'dashboard', component: HomeComponent },
//     // { path: 'dashboard', component: DashComponent },
//     { path: 'user', component: UserComponent },
//     { path: 'table', component: TableComponent },
//     { path: 'icons', component: IconsComponent },
//     { path: 'notifications', component: NotificationsComponent },
//     { path: 'typography', component: TypographyComponent },
//     { path: 'maps', component: MapsComponent },
//     { path: 'maps', component: TestComponent },
//     { path: 'test', component: TestComponent },
//     { path: 'upgrade', component: UpgradeComponent }
//
// ]


/*leon rute*/
export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent,
        children:[
            {path: '', component: HomeComponent},
            { path: 'user', component: UserComponent },
            { path: 'table', component: TableComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'allsurveys', component: AllsurveysComponent },
            { path: 'newsurvey', component: NewsurveyComponent },
            { path: 'test', component: TestComponent },
            { path: 'upgrade', component: UpgradeComponent }
            // { path: 'datatable', component: DatatableComponent }
            // { path: 'ngxdatatable', component: NgxComponent },
        ]},

]
// {
//     path: 'admin',
//         component: AdminComponent,
//     canActivate: [AuthGuard],
//     children: [
//     {
//         path: '',
//         children: [
//             { path: 'crises', component: ManageCrisesComponent },
//             { path: 'heroes', component: ManageHeroesComponent },
//             { path: '', component: AdminDashboardComponent }
//         ],
//     }
// ]
// }

export const MODULE_COMPONENTS = [
    DashboardComponent,
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    TestComponent,
    // NewsurveyComponent,
    // DatatableComponent,
    UpgradeComponent
]
