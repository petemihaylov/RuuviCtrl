import { Component, AfterViewInit, Input } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';

import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import 'leaflet.smooth_marker_bouncing';
const iconUrl = 'assets/blue-pin.png';

// Customize the icon
const iconDefault = icon({
  iconUrl,
  iconSize: [34, 30],
  iconAnchor: [12, 41],
  popupAnchor: [4, -48],
});

Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-dashboard-map',
  templateUrl: './dashboard-map.component.html',
  styleUrls: ['./dashboard-map.component.scss']
})
export class DashboardMapComponent implements AfterViewInit {

  @Input('assetData') assetData: Observable<AssetDto[]>;

  private map: L.Map;
  private assetsLayer;

  constructor(){ }

  ngAfterViewInit(): void {

    this.assetData.subscribe(items => { 
      if(items.length > 0) {
      
          this.initMap();

          // Creating assetsLayer with all the markers
          this.assetsLayer = L.geoJSON(this.assetsToFeatureCollection(items), {
            pointToLayer: function (feature, latlng) {
                  return L.marker(latlng).bounce().bindPopup(feature.properties.popupContent);
            },
          });

          // Adding the layer to the map
          this.assetsLayer.addTo(this.map);
      }
    });
  }

  private assetsToFeatureCollection(assets: AssetDto[]): any{
    let collection = new Array();

    assets.forEach(element => {
     collection.push(this.assetToFeature(element));
    });

     return {
       type: "FeatureCollection",
       features: collection
     }
  }

  private assetToFeature(asset: AssetDto): any {

    const lastRoute = asset.route[asset.route.length - 1];
    const lastPressure = asset.pressure[asset.pressure.length - 1].value;
    const lastHumidity = asset.humidity[asset.humidity.length - 1].value;
    const lastTemperature = asset.temperature[asset.temperature.length - 1].value;

    return {
      type: "Feature",
      properties: {
        name: asset.name,
        popupContent:
        "<div>  " +
        "<div><img src=\"https://static.thenounproject.com/png/159069-200.png\" width=\"28\" height=\"28\"> <b>"+ asset.deviceId + "</b> </div>" +
        "<div> <b>name: </b> "+ asset.name + " </div>" +
        "<div> <b>pressure: </b> "+ lastPressure + " Pa</div>" +
        "<div> <b>humidity: </b> "+ lastHumidity + " %</div>" +
        "<div> <b>temperature: </b> "+ lastTemperature + " °C</div>" +
        "</div> "
      },
      geometry: {
        type: "Point",
        coordinates: [lastRoute.longitude, lastRoute.latitude]
      }
    };
  }

  private initMap(): void {
      const assetLocation = {longitude: null, latitude: null};

      this.assetData.subscribe(items => {
          const loc = items[0].route[items[0].route.length - 1];
          assetLocation.longitude = loc.longitude;
          assetLocation.latitude = loc.latitude;
       });
      if (this.map && this.map.remove) {
          this.map.off();
          this.map.remove();
      }
      
      this.map = L.map("map", {
          center: [assetLocation.latitude, assetLocation.longitude],
          fullscreenControl: true,
          zoom: 13
      });
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",      {
      maxZoom: 19,
      }).addTo(this.map);

      L.Marker.setBouncingOptions({
              bounceHeight : 4,   // height of the bouncing
              bounceSpeed  : 100,   // bouncing speed coefficient
      });
  }

}
