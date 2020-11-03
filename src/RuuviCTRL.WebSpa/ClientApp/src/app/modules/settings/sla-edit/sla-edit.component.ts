import { Component, OnInit } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute} from '@angular/router';
import {RuuviWebsocket} from '../../ruuvi-monitoring/_models/ruuvi-websocket.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sla-edit',
  templateUrl: './sla-edit.component.html',
  styleUrls: ['./sla-edit.component.scss']
})
export class SlaEditComponent implements OnInit {

  sla: SlaDto = {} as SlaDto;

  constructor(private slaService: SlaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const paramsSub = this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = +params.get('id'); // (+) converts string 'id' to a number
      const detailsSub = this.slaService.read(id).subscribe(res => {
        this.sla = res;
      });
      detailsSub.unsubscribe();
    });
    paramsSub.unsubscribe();
  };

  editSla(){
    console.log(this.sla);
    this.slaService.post(this.sla).subscribe(res => {
      console.log(res);
    });
  }

}
