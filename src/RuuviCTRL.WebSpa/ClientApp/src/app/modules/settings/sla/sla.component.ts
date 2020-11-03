import { Component, OnInit } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {
  _data: BehaviorSubject<SlaDto> = new BehaviorSubject(new SlaDto());
  public readonly Data: Observable<SlaDto> = this._data.asObservable();

  constructor(private slaService: SlaService) { }

  ngOnInit(): void {

    const listSub = this.slaService.list().subscribe(res => {
      console.log(res);
      // this._data.next(res);
    });
    listSub.unsubscribe();
  }

}
