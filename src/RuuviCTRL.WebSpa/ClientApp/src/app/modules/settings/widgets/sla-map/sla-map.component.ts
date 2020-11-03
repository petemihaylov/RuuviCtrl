import { Component, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import { LocationStat } from 'src/app/pages/dashboard/_models/location-stat.model';

@Component({
  selector: 'app-sla-map',
  templateUrl: './sla-map.component.html',
  styleUrls: ['./sla-map.component.scss']
})
export class SlaMapComponent implements AfterViewInit {

  constructor() {}
  private map;

  @Input() routeHistory: LocationStat[];

  private routeHistoryLayer;
  private routeHistoryTimeLayer;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map", {
      fullscreenControl: true,
      center: [0, 0],
      zoom: 3
    });

    this.map.pm.addControls({
      position: 'topleft',
      drawMarker: false,
      drawPolyline: false,
      drawCircleMarker: false
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    tiles.addTo(this.map);
  }


}
