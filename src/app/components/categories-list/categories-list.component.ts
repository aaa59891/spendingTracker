import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category";

@Component({
    selector: "app-categories-list",
    templateUrl: "./categories-list.component.html",
    styleUrls: ["./categories-list.component.css"]
})
export class CategoriesListComponent implements OnInit {
    categories: Category[] = [
        new Category('test'),
        new Category('test1'),
        new Category('test2'),
        new Category('test3'),
    ]
    constructor() {}

    ngOnInit() {}
}
