import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from "angularfire2/firestore";
import { Category } from "../models/category";
import { Observable, of, Subject } from "rxjs";
import { AuthService } from "services/auth.service";
import { switchMap, map } from "rxjs/operators";
import { AFirebaseService } from "../shared/firebase/abstracts/AFirebaseService";

@Injectable({
    providedIn: "root"
})
export class CategoryService extends AFirebaseService<Category> {
    protected collectionName: string = 'categories';
    
    editCategorySub = new Subject<Category>();

    constructor(
        private af: AngularFirestore,
        private authService: AuthService
    ) {
        super(af);
    }

    getCategories() {
        return this.authService.getEmail().pipe(
            switchMap(email => {
                if (!email) {
                    return of([]);
                }
                return this.af
                    .collection<Category>(this.collectionName, ref =>
                        ref.where("email", "==", email).orderBy('name', 'asc')
                    )
                    .valueChanges();
            })
        );
    }

    addCategory(category: Category) {
        return this.addModel(category);
    }

    updateCategory(category: Category){
        return this.updateModel(category)
            .catch((err) => alert('This category does not exist.'));
    }

    deleteCategory(id: string){
        return this.deleteModel(id);
    }
}
