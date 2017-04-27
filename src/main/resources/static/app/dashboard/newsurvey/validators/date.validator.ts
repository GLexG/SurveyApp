import { FormControl } from '@angular/forms';
import {ValidationResult} from './validation-result';

export class DateValidator {
    static regularDate(control: FormControl): ValidationResult {
        // let regularDatePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
        let regularDatePattern = /^\d{1,2} \d{1,2} \d{4}$/;

        if (!control.value.match(regularDatePattern))
            return { "regularDate": true };

        return null;
    }
}