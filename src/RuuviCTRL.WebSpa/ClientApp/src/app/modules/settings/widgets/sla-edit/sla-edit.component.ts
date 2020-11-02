import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Sla} from '../../_models/sla.model';

@Component({
  selector: 'app-sla-edit',
  templateUrl: './sla-edit.component.html',
  styleUrls: ['./sla-edit.component.scss']
})
export class SlaEditComponent implements OnInit {

  localSla: Sla = ({} as Sla);
  @Input()
  set sla(sla: Sla) {
    if (sla) {
      this.correctChange.emit(sla);
      this.localSla = sla;
    }
  }
  get sla() {
    return this.localSla;
  }
  @Output()
  correctChange: EventEmitter<Sla> = new EventEmitter<Sla>();

  time: NgbTimeStruct = {hour: 0, minute: 1, second: 0};
  seconds = true;
  availableCategories = [
    'Temperature',
    'Humidity',
    'Pressure',
    'Location'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSlaChange(){
    this.correctChange.emit();
  }

}
