import { Component, OnInit } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaAssetDto} from '../_models/slaAssetDto.model';
import {SlaService} from '../_services/sla.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {

  slas$: Observable<SlaDto[]>;

  constructor(private slaService: SlaService) { }

  ngOnInit(): void {
    this.slas$ = this.slaService.list();
  }


  getAssetList(assets: SlaAssetDto[]): string {
    if (assets.length == 0){
      return 'No assets assigned'
    }
    return assets.map(a => a.name).join(', ');
  }
}
