import { Component, OnInit, Input } from "@angular/core";
import { Category } from "../../models/category";
import { CategoryService } from "../../services/category.service";

@Component({
    selector: "app-category-item",
    templateUrl: "./category-item.component.html",
    styleUrls: ["./category-item.component.css"]
})
export class CategoryItemComponent implements OnInit {
    @Input("categoryItem") categoryItem: Category;

    constructor(
        private categoryService: CategoryService
    ) {}

    ngOnInit() {}

    onDelete(){
        this.categoryService.deleteModel(this.categoryItem.id);
    }

    onEdit(){
        this.categoryService.editCategorySub.next(this.categoryItem);
    }
}
