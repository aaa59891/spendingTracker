import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../models/category";
import { AuthService } from "services/auth.service";
import { AutoUnsubscribe } from "../../shared/autoUnsubscribe";
import { Subscription } from "rxjs";
import { EFormMode } from "../../shared/enums/eFormMode";

@Component({
    selector: "app-category-form",
    templateUrl: "./category-form.component.html",
    styleUrls: ["./category-form.component.css"]
})
export class CategoryFormComponent extends AutoUnsubscribe implements OnInit {
    protected subscriptions: Subscription[] = [];
    form: FormGroup;
    formMode: EFormMode = EFormMode.Add;
    mode = EFormMode;
    private emptyForm = {name: '', id: null};

    constructor(
        private categoryService: CategoryService,
        private authService: AuthService
    ) {
        super();
    }

    ngOnInit() {
        this.initForm();
        this.subscriptions.push(
            this.authService.getEmail().subscribe((email) => this.form.patchValue({email: email})),
            this.categoryService.editCategorySub.subscribe((editCategory) => {
                this.formMode = EFormMode.Edit;
                this.form.setValue(editCategory);
            })
        );
    }

    onSubmitCategory() {
        if(!this.form.value.email){
            alert('Please login!');
            return;
        }
        switch(this.formMode){
            case EFormMode.Add:
                this.categoryService.addModel(this.form.value)
                    .then(() => {
                        this.form.patchValue(this.emptyForm);
                    })
                break;
            case EFormMode.Edit:
                this.categoryService.updateModel(this.form.value)
                    .catch((err) => alert('This category does not exist.'))
                break;
        }
    }

    onCancel(){
        this.formMode = EFormMode.Add;
        this.form.patchValue(this.emptyForm);
    }

    private initForm(){
        this.form = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null),
            email: new FormControl(null)
        })
    }
}
