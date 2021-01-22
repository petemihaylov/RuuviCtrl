import { Component, AfterViewInit, Input, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';
import { Observable } from 'rxjs';

import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import 'leaflet.smooth_marker_bouncing';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';
const iconUrl = "data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3EStockholm-icons / Map / Marker1%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Stockholm-icons-/-Map-/-Marker1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect id='bound' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpath d='M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z' id='Combined-Shape' fill='%23000000' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

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
export class DashboardMapComponent implements AfterViewInit, OnDestroy {

  @Input('assetData') assetData: Observable<AssetDto[]>;
  @ViewChild("preMap") preMapElement: ElementRef;
  
  private map: L.Map;
  private assetsLayer;
  private hasAddedLayer = false;

  constructor(private renderer: Renderer2) { }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map == null;
    }
  }

  ngAfterViewInit(): void {

    this.initMap();

    this.assetData.subscribe(items => {
      if (items.length > 0) {
        if (this.hasAddedLayer) {
          this.map.removeLayer(this.assetsLayer);
        }
        // Creating assetsLayer with all the markers
        this.assetsLayer = L.geoJSON(this.assetsToFeatureCollection(items), {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng).bindPopup(feature.properties.popupContent);
          },
        });
        this.assetsLayer.addTo(this.map);

        // Adding the layer to the map
        if (!this.hasAddedLayer) {
          this.hasAddedLayer = true;
        }
        this.map.fitBounds(this.assetsLayer.getBounds());
      }
    });
  }

  private assetsToFeatureCollection(assets: AssetDto[]): any {
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
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    this.assetData.subscribe(a => popupEl.item = a.find(arr => arr.id == asset.id));

    return {
      type: "Feature",
      properties: {
        name: asset.name,
        popupContent: popupEl
      },
      geometry: {
        type: "Point",
        coordinates: [lastRoute.longitude, lastRoute.latitude]
      }
    };
  }

  private initMap(): void {

    const randomId = this.makeid(6);

      this.renderer.setProperty(this.preMapElement.nativeElement, 'innerHTML', '<div id="map-' + randomId + '" class="h-100" style="z-index: 1;"></div>');

    this.map = L.map("map-" + randomId, {
      center: [52.073274853882005, 5.4150805111515075],
      fullscreenControl: true,
      zoom: 6
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 16,
    }).addTo(this.map);
  }

  private makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

}
