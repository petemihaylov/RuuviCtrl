import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {SlaDto} from '../../_models/slaDto.model';

@Component({
  selector: 'app-sla-form',
  templateUrl: './sla-form.component.html',
  styleUrls: ['./sla-form.component.scss']
})
export class SlaFormComponent implements OnInit {

  localSla: SlaDto = ({} as SlaDto);
  @Input()
  set sla(sla: SlaDto) {
    if (sla) {
      this.slaChange.emit(sla);
      this.localSla = sla;
    } else {
      this.localSla = ({} as SlaDto);
    }
  }
  get sla() {
    return this.localSla;
  }

  @Output()
  slaChange: EventEmitter<SlaDto> = new EventEmitter<SlaDto>();

  seconds = true;

  constructor() { }

  ngOnInit(): void {
  }

}
