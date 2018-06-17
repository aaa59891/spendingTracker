import { Injectable } from "@angular/core";
import { AFirebaseService } from "../shared/firebase/abstracts/AFirebaseService";
import { Spending } from "../models/spending";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
    providedIn: "root"
})
export class SpendingService extends AFirebaseService<Spending> {
    protected collectionName: string = 'spendings';
    constructor(
        private af: AngularFirestore
    ) {
        super(af);
    }

    
}
