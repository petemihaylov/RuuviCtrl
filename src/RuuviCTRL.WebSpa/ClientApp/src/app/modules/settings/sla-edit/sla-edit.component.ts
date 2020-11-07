import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RuuviWebsocket} from '../../ruuvi-monitoring/_models/ruuvi-websocket.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sla-edit',
  templateUrl: './sla-edit.component.html',
  styleUrls: ['./sla-edit.component.scss']
})
export class SlaEditComponent implements OnInit, OnDestroy {

  sla: SlaDto = {} as SlaDto;
  isValid: boolean;


  private unsubscribe: Subscription[] = [];

  constructor(private slaService: SlaService, private route: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    const paramsSub = this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = +params.get('id'); // (+) converts string 'id' to a number
      const detailsSub = this.slaService.read(id).subscribe(res => {
        this.sla = res;
        console.log(res);
        this.changeDetector.detectChanges();
      });
      this.unsubscribe.push(detailsSub);
    });
    this.unsubscribe.push(paramsSub);
  };

  editSla(){
    console.log(this.sla);
    if (this.isValid) {
      this.slaService.update(this.sla).subscribe(res => {
        this.router.navigate(['../']);
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

}
