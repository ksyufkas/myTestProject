import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {DeliveriesService} from "./deliveries.service";

/**
 * Модуль раздела Доставки
 */
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        BsDatepickerModule
    ],
    providers: [DeliveriesService]
})
export class DeliveriesModule {
}
