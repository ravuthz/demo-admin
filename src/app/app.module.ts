import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MytableComponent } from './mytable/mytable.component';

//import { routing } from './app.routing';
//import { AppRouteModule } from './app.route';

const routes:Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'mytable', component: MytableComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        SidebarComponent,
        MytableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        //routing
        //AppRouteModule
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
