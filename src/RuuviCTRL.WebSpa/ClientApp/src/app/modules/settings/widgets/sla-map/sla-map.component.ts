import { Component, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import { LocationStat } from 'src/app/pages/dashboard/_models/location-stat.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sla-map',
  templateUrl: './sla-map.component.html',
  styleUrls: ['./sla-map.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SlaMapComponent,
      multi: true
    }
  ]
})
export class SlaMapComponent implements AfterViewInit, ControlValueAccessor {

  private onChange: Function;

  constructor() {}
  private map;
  private drawnItems;

  @Input() value: string | Array<string>;

  @Input() routeHistory: LocationStat[];

  private routeHistoryLayer;
  private routeHistoryTimeLayer;

  ngAfterViewInit(): void {
    this.initMap();
  }

  getGeoJson(){
    return this.drawnItems.toGeoJSON();
  }

  private initMap(): void {
    this.map = L.map("map", {
      fullscreenControl: true,
      center: [0, 0],
      zoom: 3
    });

    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);

    console.log(this.drawnItems);

    var drawControl = new L.Control.Draw({
      draw: {
        polyline: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
          featureGroup: this.drawnItems
      }
    });
    this.map.addControl(drawControl);

    this.map.on(L.Draw.Event.CREATED, function (event) {
      var layer = event.layer;
      layer.addTo(this.drawnItems);
      this.onChange(this.getGeoJson());
  }.bind(this));

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

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }


}
