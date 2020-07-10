import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DeliveriesComponent} from "./deliveries/deliveries.component";
import {DeliveriesModule} from "./deliveries/deliveries.module";
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap";

/**
 * Раздел Кабинет пользователя
 */
@NgModule({
    imports: [
        CommonModule,
        DeliveriesModule,
        FormsModule,
        PaginationModule.forRoot(),
    ],
    exports: [
        PaginationModule
    ],
    declarations: [
        DeliveriesComponent
    ]
})
export class UserPortalModule {
}
