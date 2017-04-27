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
let Test2Component = class Test2Component {
    constructor(_fb) {
        this._fb = _fb;
    }
    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([])
        });
        // add address
        this.addAddress();
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }
    initAddress() {
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    }
    addAddress() {
        const control = this.myForm.controls['addresses'];
        const addrCtrl = this.initAddress();
        control.push(addrCtrl);
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }
    removeAddress(i) {
        const control = this.myForm.controls['addresses'];
        control.removeAt(i);
    }
    save(model) {
        // call API to save
        // ...
        console.log(model);
    }
};
Test2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test2-app',
        templateUrl: 'test2.component.html',
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], Test2Component);
exports.Test2Component = Test2Component;
//# sourceMappingURL=test2.component.js.map