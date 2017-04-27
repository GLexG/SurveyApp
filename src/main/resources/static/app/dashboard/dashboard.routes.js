"use strict";
const dashboard_component_1 = require('./dashboard.component');
const home_component_1 = require('./home/home.component');
const user_component_1 = require('./user/user.component');
const icons_component_1 = require('./icons/icons.component');
const table_component_1 = require('./table/table.component');
const notifications_component_1 = require('./notifications/notifications.component');
const typography_component_1 = require('./typography/typography.component');
const maps_component_1 = require('./maps/maps.component');
const upgrade_component_1 = require('./upgrade/upgrade.component');
const test_component_1 = require("./test/test.component");
const newsurvey_component_1 = require("./newsurvey/newsurvey.component");
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
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'user', component: user_component_1.UserComponent },
            { path: 'table', component: table_component_1.TableComponent },
            { path: 'icons', component: icons_component_1.IconsComponent },
            { path: 'notifications', component: notifications_component_1.NotificationsComponent },
            { path: 'typography', component: typography_component_1.TypographyComponent },
            { path: 'newsurvey', component: newsurvey_component_1.NewsurveyComponent },
            { path: 'test', component: test_component_1.TestComponent },
            { path: 'upgrade', component: upgrade_component_1.UpgradeComponent }
        ] },
];
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
exports.MODULE_COMPONENTS = [
    dashboard_component_1.DashboardComponent,
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    test_component_1.TestComponent,
    // NewsurveyComponent,
    upgrade_component_1.UpgradeComponent
];
//# sourceMappingURL=dashboard.routes.js.map