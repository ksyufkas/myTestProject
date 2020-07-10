import {NgModule} from '@angular/core';
import {UserPortalModule} from "./user-portal/user-portal.module";
import {RouterModule, Routes} from "@angular/router";
import {UserPortalComponent} from "./user-portal/user-portal.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {DeliveriesComponent} from "./user-portal/deliveries/deliveries.component";
import {NotFoundComponent} from "./not-found-page/not-found.component";
import {NotFoundModule} from "./not-found-page/not-found.module";
import {MyMenuComponent} from "../shared/components/menu/menu.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {
        path: 'user-portal', component: UserPortalComponent, children: [
            {path: '', redirectTo: '/user-portal/deliveries', pathMatch: 'full'},
            {path: 'deliveries', component: DeliveriesComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
];

/**
 * Модуль объединяющий все разделы
 */
@NgModule({
    imports: [
        UserPortalModule,
        HomeModule,
        NotFoundModule,
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    declarations: [
        HomeComponent,
        UserPortalComponent,
        NotFoundComponent,
        MyMenuComponent
    ]
})
export class PagesModule {
}
