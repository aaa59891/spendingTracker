import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../models/category";
import { AutoUnsubscribe } from "../../shared/autoUnsubscribe";
import { Subscription } from "rxjs";
import { AuthService } from "services/auth.service";
import { map } from "rxjs/operators";
import { SpendingService } from "../../services/spending.service";
import * as moment from 'moment';
import { EDateFormat } from "../../shared/enums/eDateFormat";

@Component({
    selector: "app-spending-form",
    templateUrl: "./spending-form.component.html",
    styleUrls: ["./spending-form.component.css"]
})
export class SpendingFormComponent extends AutoUnsubscribe implements OnInit {
    protected subscriptions: Subscription[] = [];
    form: FormGroup;
    categories: Category[];
    constructor(
        private categoryService: CategoryService,
        private authService: AuthService,
        private spendingService: SpendingService
    ) {
        super();
    }

    ngOnInit() {
        this.subscriptions.push(
            this.categoryService.getCategories().pipe(
                map((categories) => categories.map((category) => {
                    delete category.email;
                    return category;
                }))
            ).subscribe(
                categories => this.categories = categories
            ),
            this.authService.getEmail().subscribe(
                email => this.form.patchValue({email: email})
            )
        )
        this.initForm();
    }

    onSubmit(){
        this.spendingService.addModel(this.form.value);
    }

    private initForm(){
        this.form = new FormGroup({
            id: new FormControl(null),
            amount: new FormControl(null),
            category: new FormControl(null),
            date: new FormControl(moment().format(EDateFormat.Date)),
            comment: new FormControl(null),
            email: new FormControl(null)
        });
    }
}
