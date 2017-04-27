"use strict";
class DateValidator {
    static regularDate(control) {
        // let regularDatePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
        let regularDatePattern = /^\d{1,2} \d{1,2} \d{4}$/;
        if (!control.value.match(regularDatePattern))
            return { "regularDate": true };
        return null;
    }
}
exports.DateValidator = DateValidator;
//# sourceMappingURL=date.validator.js.map