import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { SlaDto } from '../../_models/slaDto.model';

@Component({
  selector: 'app-sla-edit',
  templateUrl: './sla-edit.component.html',
  styleUrls: ['./sla-edit.component.scss']
})
export class SlaEditComponent implements OnInit {

  localSla: SlaDto = ({} as SlaDto);
  @Input()
  set sla(sla: SlaDto) {
    if (sla) {
      this.correctChange.emit(sla);
      this.localSla = sla;
    }
  }
  get sla() {
    return this.localSla;
  }
  @Output()
  correctChange: EventEmitter<SlaDto> = new EventEmitter<SlaDto>();

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
