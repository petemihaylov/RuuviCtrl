import { Component, AfterViewInit, Input, OnChanges  } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

import { LocationStat } from '../../_models/location-stat.model';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.scss']
})
export class MapWidgetComponent implements AfterViewInit {
  ngDoCheck() {
    if(this.routeHistoryLayer){
      this.removeRouteHistory();
      this.addRouteHistory();
    }
  }

  private map;
  
  @Input() routeHistory: LocationStat[];

  constructor() { }

  private routeHistoryLayer;

  
  ngAfterViewInit(): void {
    this.initMap();
    if(this.routeHistory != null){
      this.addRouteHistory();
    }
  }

  private initMap(): void {
    var lastRouteHistory = this.routeHistory[this.routeHistory.length - 1];
    this.map = L.map('map', {
      center: [ lastRouteHistory.latitude, lastRouteHistory.longitude],
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private addRouteHistory(): void {
    this.routeHistoryLayer = new L.Polyline(this.routeHistory.map(res => L.latLng(res.latitude, res.longitude)), {
        color: 'blue',
        weight: 6,
        opacity: 0.5,
        smoothFactor: 1
    }).addTo(this.map);
  }

  private removeRouteHistory(): void {
    this.map.removeLayer(this.routeHistoryLayer);
  }
}
