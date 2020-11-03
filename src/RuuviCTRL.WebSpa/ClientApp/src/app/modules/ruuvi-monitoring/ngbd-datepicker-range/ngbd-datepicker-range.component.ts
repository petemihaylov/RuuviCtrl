
import { EventEmitter, Input, Output } from '@angular/core';
import {Component, Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}
@Component({
  selector: 'app-ngbd-datepicker-range',
  templateUrl: './ngbd-datepicker-range.component.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class NgbdDatepickerRangeComponent {
  @Input() public DatePickerName: string;
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  model: Date;

  public pickDate(): void {    
    this.onDatePicked.emit(this.model);
}

  get today() {
    return new Date();
  }
}
