import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {SlaDto} from '../_models/slaDto.model';
import {SlaService} from '../_services/sla.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RuuviWebsocket} from '../../ruuvi-monitoring/_models/ruuvi-websocket.model';
import {Subscription} from 'rxjs';
import {AssetsService} from '../_services/assets.service';
import {SlaAssetsService} from '../_services/sla-assets.service';

@Component({
  selector: 'app-sla-edit',
  templateUrl: './sla-edit.component.html',
  styleUrls: ['./sla-edit.component.scss']
})
export class SlaEditComponent implements OnInit, OnDestroy {

  sla: SlaDto = {} as SlaDto;
  isValid = true;


  private unsubscribe: Subscription[] = [];

  constructor(private slaService: SlaService, private route: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef, private slaAssetsService: SlaAssetsService) { }

  ngOnInit(): void {
    const paramsSub = this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = +params.get('id'); // (+) converts string 'id' to a number
      const detailsSub = this.slaService.read(id).subscribe(res => {
        this.getAssets(res);
        this.sla = res;
        console.log(res);
        this.changeDetector.detectChanges();
      });
      this.unsubscribe.push(detailsSub);
    });
    this.unsubscribe.push(paramsSub);
  };

  getAssets(sla: SlaDto) {
    this.slaAssetsService.ActiveAssets(sla.id).subscribe(res => {
      res.forEach(asset => {
        sla.assets.push(Number(asset.id));
      });
      console.log(sla);
    });
  }

  setAssets(slaId: number) {

    this.slaAssetsService.ActiveAssets(slaId).subscribe(res => {
      this.sla.assets.forEach(assets => {
        const exist = res.filter(conn => Number(conn.id) === assets)[0];
        if (!exist)
        {
          console.log('add');
          this.slaAssetsService.AddAsset(slaId, Number(assets)).subscribe();
        }
        res = res.filter(obj => obj !== exist);
      });

      res.forEach(remove => {
        console.log('remove');
        this.slaAssetsService.RemoveAsset(slaId, Number(remove.id)).subscribe();
      });
    });

  }

  editSla(){
    if (this.isValid) {
      this.setAssets(this.sla.id);
      this.slaService.update(this.sla).subscribe(res => {
        this.router.navigate(['/settings/overview']);
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

}
