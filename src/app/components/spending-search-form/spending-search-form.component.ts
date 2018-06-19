import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EDateFormat } from '../../shared/enums/eDateFormat';
import { SpendingService } from '../../services/spending.service';
import { AutoUnsubscribe } from '../../shared/autoUnsubscribe';
import { DlDateTimePickerComponent } from 'angular-bootstrap-datetimepicker';
import { DateUtils } from '../../shared/utils/dateUtils';
import { Spending } from '../../models/spending';

enum DateMode{
    Day = 'day',
    Month = 'month',
    Customer = 'customer'
}

@Component({
  selector: 'app-spending-search-form',
  templateUrl: './spending-search-form.component.html',
  styleUrls: ['./spending-search-form.component.css']
})
export class SpendingSearchFormComponent extends AutoUnsubscribe implements OnInit, AfterViewInit {
    protected subscriptions: Subscription[] = [];
    @ViewChild('datePicker') datePicker: DlDateTimePickerComponent<Date>;
    @ViewChild('monthPicker') monthPicker: DlDateTimePickerComponent<Date>;
    dateMode = DateMode;
    start = new Date();
    end = new Date();
    record: Spending[];
    selectedMode = DateMode.Day;

    constructor(
        private spendingService: SpendingService
    ) {
        super();
    }
    
    ngOnInit() {
        // this.spendingService.spendingSubject.next(this.getDuration());
    }
    
    ngAfterViewInit(): void {
        this.datePicker.value = this.start;
        this.monthPicker.value = this.start;
    }
    
    onSearch(){
        this.spendingService.spendingSubject.next(this.getDuration());
    }

    onStartInput(event){
        this.start = event.target.valueAsDate;
        this.datePicker.value = this.start;
        this.monthPicker.value = this.start;
    }

    onMonthPickerChange(dtp: DlDateTimePickerComponent<Date>){
        if(this.selectedMode === DateMode.Month){
            this.start = DateUtils.getFirstDay(dtp.value);
            this.end = DateUtils.getLastDay(dtp.value);
        }
    }

    onDatePickerChange(dtp: DlDateTimePickerComponent<Date>){
        if(this.selectedMode === DateMode.Day){
            this.start = dtp.value;
            this.end = dtp.value;
        }
    }

    onModeChange(mode: DateMode){
        switch(mode){
            case DateMode.Day:
                this.datePicker.value = this.start;
                break;
            case DateMode.Month:
                this.monthPicker.value = this.start;
                break;
            case DateMode.Customer:
                break;
        }
        this.selectedMode = mode;
    }

    private getDuration(){
        return {
            start: this.start,
            end: this.end
        }
    }

    get startView(){
        return this.selectedMode === DateMode.Month? 'month': 'day';
    }
    
    get minView(){
        return this.selectedMode === DateMode.Month? 'month': 'day';
    }
}
