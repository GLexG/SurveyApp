import { Component, Input } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'checkbox-cmp',
    templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
    @Input('group') contractGroup: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    addAnswerCheckbox() {
        const answerArray = <FormArray>this.contractGroup.controls['answers'];
        const newAnswer = this.initAnswer();

        answerArray.push(newAnswer);
    }

    removeAnswer(idx: number) {
        const answerArray = <FormArray>this.contractGroup.controls['answers'];
        answerArray.removeAt(idx);
    }

    initAnswer() {
        return this.fb.group({

            // pravi jebeni problem ovo disabled...i zato nije hteo da mi ispise niz adresa u proslom slucaju!!!
            // text: [{value:'empty',disabled:true}],
            checkbox:'',
            text: ''
        });
    }
}

