import { Component, OnInit, Input } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';

import * as Leaflet from 'leaflet';
import "leaflet-timedimension";

@Component({
  selector: 'app-dashboard-map',
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.scss']
})
export class DashboardMapComponent implements OnInit {

  @Input('assetData') assetData: Observable<AssetDto[]>;
  
  private map: Leaflet.Map;
    
  constructor(){ }

  

  ngOnInit(): void {
      this.assetData.forEach( asset => console.log(asset));

      // Leaflet
      this.map = Leaflet.map("map", {
          center: [ 39.8282, -98.5795 ],
          zoom: 3
      });
      
      const tiles = Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
      tiles.addTo(this.map);
  }

}
