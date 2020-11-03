import { Component, OnInit } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sla-create',
  templateUrl: './sla-create.component.html',
  styleUrls: ['./sla-create.component.scss']
})
export class SlaCreateComponent implements OnInit {

  sla: SlaDto = {} as SlaDto;
  isValid = false;

  constructor(private slaService: SlaService, private router: Router) { }

  ngOnInit(): void {
  }

  createSla(){
    console.log(this.isValid);
    if (this.isValid) {
      this.sla.assetId = 1;
      this.slaService.post(this.sla).subscribe(res => {
        this.router.navigate(['/settings/overview']);
      });
    }

  }

}
