import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EDateFormat } from '../../shared/enums/eDateFormat';
import { SpendingService } from '../../services/spending.service';
import { AutoUnsubscribe } from '../../shared/autoUnsubscribe';
import { DateUtils } from '../../shared/utils/dateUtils';
import { Spending } from '../../models/spending';
import * as moment from 'moment';
import { IDatePickerConfig, DatePickerDirective, SingleCalendarValue } from 'ng2-date-picker';

enum DateMode{
    Day = 'day',
    Month = 'month',
    Range = 'range'
}

@Component({
  selector: 'app-spending-search-form',
  templateUrl: './spending-search-form.component.html',
  styleUrls: ['./spending-search-form.component.css']
})
export class SpendingSearchFormComponent extends AutoUnsubscribe implements OnInit, AfterContentInit {
    protected subscriptions: Subscription[] = [];
    dateMode = DateMode;

    defaultDate = moment().format(EDateFormat.Date);
    from = this.defaultDate;
    to = this.defaultDate;
    month = moment().format(EDateFormat.Month);
    date = this.defaultDate;

    record: Spending[];

    selectedMode = DateMode.Day;

    pickerConfig: IDatePickerConfig = {
        format: EDateFormat.Date
    }

    monthPickerConfig: IDatePickerConfig = {
        format: EDateFormat.Month
    }

    @ViewChild('picker') picker: DatePickerDirective
    constructor(
        private spendingService: SpendingService
    ) {
        super();
    }
    
    ngOnInit() {
        this.onSearch();
    }
    
    ngAfterContentInit(): void {
    }

    onSearch(){
        switch(this.selectedMode){
            case DateMode.Day:
                this.searchRecordByDate();
                break;
            case DateMode.Month:
                this.searchRecordByMonth();
                break;
            case DateMode.Range:
                this.searchRecordByRange();
                break;
        }
    }

    private searchRecordByDate(){
        this.spendingService.spendingSubject.next({
            from: moment(this.date, EDateFormat.Date).toDate(),
            to: moment(this.date, EDateFormat.Date).toDate()
        });
    }

    private searchRecordByMonth(){
        let firstDay = DateUtils.getFirstDay(moment(this.month, EDateFormat.Month).toDate());
        let lastDay = DateUtils.getLastDay(firstDay);

        this.spendingService.spendingSubject.next({
            from: firstDay,
            to: lastDay
        });
    }

    private searchRecordByRange(){
        this.spendingService.spendingSubject.next({
            from: moment(this.from, EDateFormat.Date).toDate(),
            to: moment(this.to, EDateFormat.Date).toDate()
        });
    }

    private getDuration(from: Date, to: Date){
        return {from, to};
    }
    get startView(){
        return this.selectedMode === DateMode.Month? 'month': 'day';
    }
    
    get minView(){
        return this.selectedMode === DateMode.Month? 'month': 'day';
    }
}
