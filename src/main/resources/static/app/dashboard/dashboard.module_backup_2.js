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
const router_1 = require('@angular/router');
const dashboard_routes_1 = require('./dashboard.routes');
const footer_module_1 = require("../shared/footer/footer.module");
const navbar_module_1 = require("../shared/navbar/navbar.module");
const sidebar_module_1 = require("../sidebar/sidebar.module");
const forms_1 = require("@angular/forms");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES)
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS]
    }), 
    __metadata('design:paramtypes', [])
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module_backup_2.js.map