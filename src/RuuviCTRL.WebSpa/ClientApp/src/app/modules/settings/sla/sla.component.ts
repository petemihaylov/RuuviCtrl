import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {

  time: NgbTimeStruct = {hour: 0, minute: 1, second: 0};
  seconds = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

}
