import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RoutesModule } from "./routes/routes.module";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SpendingListComponent } from './components/spending-list/spending-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { DropdownBS4Directive } from './directives/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpendingItemComponent } from './components/spending-item/spending-item.component';
import { SpendingFormComponent } from './components/spending-form/spending-form.component';
import { Error404Component } from './components/error404/error404.component';
import { SpendingSearchFormComponent } from './components/spending-search-form/spending-search-form.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
@NgModule({
    declarations: [AppComponent, HomeComponent, NavbarComponent, SpendingListComponent, CategoriesListComponent, CategoryItemComponent, CategoryFormComponent, DropdownBS4Directive, SpendingItemComponent, SpendingFormComponent, Error404Component, SpendingSearchFormComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RoutesModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        DlDateTimePickerDateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
