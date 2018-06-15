import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SpendingListComponent } from "../components/spending-list/spending-list.component";
import { CategoriesListComponent } from "../components/categories-list/categories-list.component";


const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'spending-list', component: SpendingListComponent},
    {path: 'setting', children:[
        {path: 'category', component: CategoriesListComponent},
    ]},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutesModule {}
