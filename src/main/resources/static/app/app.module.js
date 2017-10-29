"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const dashboard_component_1 = require('./dashboard/dashboard.component');
const dashboard_module_1 = require('./dashboard/dashboard.module');
const sidebar_module_1 = require('./sidebar/sidebar.module');
const footer_module_1 = require('./shared/footer/footer.module');
const navbar_module_1 = require('./shared/navbar/navbar.module');
//=================================== LEON ===================================
const login_component_1 = require("./login/login.component");
// import { LoginModule} from './login/login.module';
//=================================== LEON ===================================
const common_1 = require('@angular/common');
const forms_1 = require("@angular/forms");
const error_component_1 = require("./error/error.component");
const register_component_1 = require("./register/register.component");
const test2_component_1 = require("./test2/test2.component");
const login_module_1 = require("./login/login.module");
const appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: 'error', pathMatch: 'full' },
    { path: 'test2', component: test2_component_1.Test2Component },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            login_module_1.LoginModule,
            platform_browser_1.BrowserModule,
            dashboard_module_1.DashboardModule,
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '', component: login_component_1.LoginComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                // { path: 'error', component: ErrorComponent}
                { path: '**', component: error_component_1.ErrorComponent }
            ])
        ],
        declarations: [app_component_1.AppComponent, register_component_1.RegisterComponent, error_component_1.ErrorComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
// children: [
//     { path: 'home', component: HomeComponent },
//     { path: 'table', component: TableComponent}, 
//# sourceMappingURL=app.module.js.map