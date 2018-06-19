import { Injectable } from "@angular/core";
import { AFirebaseService } from "../shared/firebase/abstracts/AFirebaseService";
import { Spending } from "../models/spending";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "services/auth.service";
import { switchMap } from "rxjs/operators";
import { of, Subject } from "rxjs";
import * as moment from 'moment';
import { EDateFormat } from "../shared/enums/eDateFormat";

@Injectable({
    providedIn: "root"
})
export class SpendingService extends AFirebaseService<Spending> {
    protected collectionName: string = 'spendings';
    spendingSubject = new Subject<{start: Date, end: Date}>();

    constructor(
        private af: AngularFirestore,
        private authService: AuthService
    ) {
        super(af);
    }

    getSpendingRecord(start: Date, end: Date){
        return this.authService.getEmail().pipe(
            switchMap(email => {
                if(!email){
                    return of([]);
                }
                return this.af.collection(
                    this.collectionName,
                    ref => ref
                        .where('email', '==', email)
                        .where('date', '>=', moment(start).format(EDateFormat.Date))
                        .where('date', '<=', moment(end).format(EDateFormat.Date))
                        .orderBy('date')
                        .orderBy('amount', 'desc')
                ).valueChanges();
            })
        )
    }
}
