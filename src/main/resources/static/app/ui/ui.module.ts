import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ UiComponent ],
    exports: [ UiComponent ]
})

export class FooterModule {}
