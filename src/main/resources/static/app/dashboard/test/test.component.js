// app.component.ts
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
const forms_1 = require('@angular/forms');
let TestComponent = class TestComponent {
    // we will use form builder to simplify our syntax
    constructor(_fb) {
        this._fb = _fb;
        this.type = "password";
    }
    getType() {
        return 'checkbox';
    }
    setType() {
        this.type = 'password';
    }
    ngOnInit() {
        // we will initialize our form here
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }
    initAddress() {
        // initialize our address
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    }
    addAddress() {
        // add address to the list
        const control = this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }
    removeAddress(i) {
        // remove address from the list
        const control = this.myForm.controls['addresses'];
        control.removeAt(i);
    }
};
TestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test-root',
        templateUrl: 'test.component.html',
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map