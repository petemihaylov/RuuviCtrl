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
  // set sla(sla: Sla) {
  //   if (sla) {
  //     this.correctChange.emit(sla);
  //     this.localSla = sla;
  //   } else {
  //     this.localSla = ({} as Sla);
  //   }
  // }
  // get sla() {
  //   return this.Sla;
  // }

  set sla(val: Sla) {
    this.slaChange.emit(val);
    this.localSla = val;
  }
  get sla() {
    return this.localSla;
  }

  @Output()
  slaChange: EventEmitter<Sla> = new EventEmitter<Sla>();

  seconds = true;
  availableCategories = [
    'Temperature',
    'Humidity',
    'Pressure',
    'Location'
  ];

  constructor() { }

  ngOnInit(): void {
    if (!this.localSla.time) {
      this.localSla.time = {hour: 0, minute: 0, second: 0};
    }
  }

  getCategoryIcon(): string{
    let icon: string;

    switch (this.localSla.category){
      case 'Temperature':
        icon = '../assets/media/svg/icons/Weather/Temperature-half.svg';
        break;
      case 'Humidity':
        icon = '../assets/media/svg/icons/Weather/Rain5.svg';
        break;
      case 'Pressure':
        icon = '../assets/media/svg/icons/Weather/Wind.svg';
        break;
      case 'Location':
        icon = '../assets/media/svg/icons/Weather/Temperature-half.svg';
        break;
    }

    return icon;
  }

}
