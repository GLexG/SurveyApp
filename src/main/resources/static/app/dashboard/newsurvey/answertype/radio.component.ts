import { Component, Input } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'radio-cmp',
    templateUrl: './radio.component.html',
})
export class RadioComponent {
    @Input('group') contractGroup: FormGroup;

    public counter : number = 0;

    constructor(private fb: FormBuilder) {

    }

    addAnswerRadio() {
        const answerArray = <FormArray>this.contractGroup.controls['answers'];
        const newAnswer = this.initAnswer();

        // this.counter = this.contractGroup.controls.answers.controls.length + 1;
        this.counter++;
        // this.contractGroup.controls['numberOfAnswerInputs'] = this.counter;
        // this.contractGroup.controls['answers',this.contractGroup.controls.answers.controls.length , 'numberOfInputs'];

        // this.contractGroup.get(['answers', i, 'qtype']).value
        answerArray.push(newAnswer);
    }

    removeAnswer(idx: number) {
        const answerArray = <FormArray>this.contractGroup.controls['answers'];
        answerArray.removeAt(idx);

        //broj answera
        this.counter --;
    }

    initAnswer() {
        return this.fb.group({
            // pravi jebeni problem ovo disabled...i zato nije hteo da mi ispise niz adresa u proslom slucaju!!!
            // text: [{value:'empty',disabled:true}],
            text:'',
            radio: ''

        });
    }
}

