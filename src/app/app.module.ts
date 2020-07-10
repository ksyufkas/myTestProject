import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PagesModule} from "./pages/pages.module";
import {RouterModule, Routes} from "@angular/router";
import {MenuService} from "./shared/components/menu/menu.service";

const appRoutes: Routes = [
    {path: '', component: AppComponent}
];

/**
 * Главный модуль
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        PagesModule,
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        MenuService
    ]
})
export class AppModule {
}
