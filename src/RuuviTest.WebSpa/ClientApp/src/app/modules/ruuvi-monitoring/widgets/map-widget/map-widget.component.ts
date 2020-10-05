import { Component, AfterViewInit, Input, OnChanges } from "@angular/core";
import * as L from "leaflet";
import "leaflet-timedimension";
import { LocationStat } from "../../_models/location-stat.model";

@Component({
  selector: "app-map-widget",
  templateUrl: "./map-widget.component.html",
  styleUrls: ["./map-widget.component.scss"]
})
export class MapWidgetComponent implements AfterViewInit {
  constructor() {}
  private map;

  @Input() routeHistory: LocationStat[];

  private routeHistoryLayer;
  private routeHistoryTimeLayer;

  ngDoCheck() {
    if (this.routeHistoryLayer) {
      this.removeRouteHistory();
      this.addRouteHistory();
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
    if (this.routeHistory != null) {
      this.addRouteHistory();
    }
  }

  private initMap(): void {
    var lastRouteHistory = this.routeHistory[this.routeHistory.length - 1];
    this.map = L.map("map", {
      center: [lastRouteHistory.latitude, lastRouteHistory.longitude],
      fullscreenControl: true,
      timeDimensionControl: true,
      timeDimensionControlOptions: {
        timeSliderDragUpdate: true,
        timeSteps: -1,
        loopButton: true,
        autoPlay: true,
        playerOptions: {
          transitionTime: 1000,
          loop: false
        }
      },
      timeDimension: true,
      zoom: 16
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

  private dataToGeoJson(): any {
    return {
      type: "Feature",
      properties: {
        name: "asset history",
        times: this.routeHistory.map(val => val.time.toString())
      },
      geometry: {
        type: "LineString",
        coordinates: this.routeHistory.map(val => [val.longitude, val.latitude])
      }
    };
  }

  private addRouteHistory(): void {
    var data = this.dataToGeoJson();

    this.routeHistoryLayer = L.geoJSON(data, {
      pointToLayer: function(feature, latLng) {
        if (feature.properties.hasOwnProperty("last")) {
          return new L.Marker(latLng, {
            icon: L.icon({
              iconUrl: "assets/media/svg/icons/Map/Marker1.svg",
              iconSize: [30, 30],
              iconAnchor: [15, 15]
            })
          });
        }
        return L.circleMarker(latLng);
      }
    });

    this.routeHistoryTimeLayer = L.timeDimension.layer.geoJson(
      this.routeHistoryLayer,
      {
        updateTimeDimension: true,
        duration: "PT2M",
        updateTimeDimensionMode: "replace",
        addlastPoint: true
      }
    );

    // Show both layers: the geoJSON layer to show the whole track
    // and the timedimension layer to show the movement of the bus
    this.routeHistoryLayer.addTo(this.map);
    this.routeHistoryTimeLayer.addTo(this.map);
  }

  private removeRouteHistory(): void {
    this.map.removeLayer(this.routeHistoryLayer);
    this.map.removeLayer(this.routeHistoryTimeLayer);
  }
}
