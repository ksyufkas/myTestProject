import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserPortalComponent} from "./pages/user-portal/user-portal.component";
import {DeliveriesComponent} from "./pages/user-portal/deliveries/deliveries.component";
import {NotFoundComponent} from "./pages/not-found-page/not-found.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {path: 'home', component: HomeComponent},
            {
                path: 'user-portal', component: UserPortalComponent, children: [
                    {path: '', redirectTo: '/user-portal/deliveries', pathMatch: 'full'},
                    {path: 'deliveries', component: DeliveriesComponent},
                    {path: '**', component: NotFoundComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}