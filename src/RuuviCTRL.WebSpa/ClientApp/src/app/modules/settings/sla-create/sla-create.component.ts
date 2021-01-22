import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SlaAssetsService} from '../_services/sla-assets.service';

@Component({
  selector: 'app-sla-create',
  templateUrl: './sla-create.component.html',
  styleUrls: ['./sla-create.component.scss']
})
export class SlaCreateComponent implements OnInit {

  sla = new SlaDto();
  isValid = false;

  constructor(private slaService: SlaService, private router: Router, private slaAssetsService: SlaAssetsService) { }

  ngOnInit(): void {
  }

  createSla(){
    if (this.isValid) {
      this.slaService.post(this.sla).subscribe(res => {
        if (this.sla.assets) {
          this.sla.assets.forEach(assets => {
            this.slaAssetsService.AddAsset(res.id, assets).subscribe();
          });
        }
        this.router.navigate(['/settings/overview']);
      });
    }

  }

}
