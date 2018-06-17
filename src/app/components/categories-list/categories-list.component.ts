import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category";
import { AutoUnsubscribe } from "../../shared/autoUnsubscribe";
import { CategoryService } from "../../services/category.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-categories-list",
    templateUrl: "./categories-list.component.html",
    styleUrls: ["./categories-list.component.css"]
})
export class CategoriesListComponent extends AutoUnsubscribe implements OnInit {
    protected subscriptions: Subscription[] = [];
    
    categories: Category[];
    constructor(
        private categoryService: CategoryService
    ) {
        super();
    }

    ngOnInit() {
        this.subscriptions.push(
            this.categoryService.getCategories().subscribe(
                (categories) => {
                    this.categories = categories;
                }
            )
        )
    }
}
