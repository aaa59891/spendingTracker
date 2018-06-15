import { Component, OnInit, Input } from "@angular/core";
import { Category } from "../../models/category";

@Component({
    selector: "app-category-item",
    templateUrl: "./category-item.component.html",
    styleUrls: ["./category-item.component.css"]
})
export class CategoryItemComponent implements OnInit {
    @Input('categoryItem') categoryItem: Category;
    
    constructor() {}

    ngOnInit() {
        console.log(this.categoryItem);
    }
}
