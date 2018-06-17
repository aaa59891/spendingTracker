import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SpendingListComponent } from "../components/spending-list/spending-list.component";
import { CategoriesListComponent } from "../components/categories-list/categories-list.component";
import { SpendingFormComponent } from "../components/spending-form/spending-form.component";
import { Error404Component } from "../components/error404/error404.component";


const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'spending', children:[
        {path: 'records', component: SpendingListComponent},
        {path: 'add', component: SpendingFormComponent}
    ]},
    {path: 'setting', children:[
        {path: 'category', component: CategoriesListComponent},
    ]},
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: '/404'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutesModule {}
