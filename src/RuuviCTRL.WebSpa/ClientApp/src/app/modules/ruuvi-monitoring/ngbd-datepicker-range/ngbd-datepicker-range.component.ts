
import { EventEmitter, Input, Output } from '@angular/core';
import {Component, Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-datepicker-range',
  styleUrls: ['./ngbd-datepicker-range.component.scss'],
  templateUrl: './ngbd-datepicker-range.component.html',
})
export class NgbdDatepickerRangeComponent {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  today: NgbDate;
  
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getPrev(calendar.getToday(), 'd', 10);
    this.toDate = calendar.getToday();
    this.today = calendar.getToday();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.fromDate && this.toDate) {
      this.onDatePicked.emit({
        fromDate: new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day),
         toDate: new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day)
        });
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
