// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder,FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
    moduleId: module.id,
    selector: 'test-root',
    templateUrl: 'test.component.html',
})
export class TestComponent implements OnInit {
    public myForm: FormGroup; // our form model

    type: string = "password";

    getType() {
        return 'checkbox';
    }

    setType() {
        this.type = 'password';
    }
    // we will use form builder to simplify our syntax
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        // we will initialize our form here
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        // initialize our address
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        // add address to the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        // remove address from the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }
}