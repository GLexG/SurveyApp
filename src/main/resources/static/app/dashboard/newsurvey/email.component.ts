import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'email',
    templateUrl: './email.component.html',
})
export class EmailComponent {
    @Input('group') emailGroup: FormGroup;
}