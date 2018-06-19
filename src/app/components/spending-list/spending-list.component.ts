import { Component, OnInit } from "@angular/core";
import { SpendingService } from "../../services/spending.service";
import { AutoUnsubscribe } from "../../shared/autoUnsubscribe";
import { Subscription} from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "app-spending-list",
    templateUrl: "./spending-list.component.html",
    styleUrls: ["./spending-list.component.css"]
})
export class SpendingListComponent extends AutoUnsubscribe implements OnInit {
    protected subscriptions: Subscription[] = [];
    record: SpendingService[];

    constructor(
        private spendingService: SpendingService
    ) {
        super();
    }

    ngOnInit() {
        this.subscriptions.push(
            this.spendingService.spendingSubject.pipe(
                switchMap(duration => {
                    return this.spendingService.getSpendingRecord(duration.start, duration.end);
                })
            ).subscribe((record) => this.record = record)
        )
    }

}
