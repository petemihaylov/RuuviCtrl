import { Component, OnInit } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sla-create',
  templateUrl: './sla-create.component.html',
  styleUrls: ['./sla-create.component.scss']
})
export class SlaCreateComponent implements OnInit {

  sla: SlaDto = {} as SlaDto;

  constructor(private slaService: SlaService) { }

  ngOnInit(): void {
  }

  createSla(){
    console.log(this.sla);
    this.slaService.post(this.sla).subscribe(res => {
      console.log(res);
    });
  }

}
