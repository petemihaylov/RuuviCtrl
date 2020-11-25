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
  @Input() geoJson: string;

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
    if (this.geoJson != null){
      this.addBoundary();
    }
  }

  private initMap(): void {
    const firstRouteHistory = this.routeHistory[0];
    const lastRouteHistory = this.routeHistory[this.routeHistory.length - 1];
    this.map = L.map("map", {
      center: [lastRouteHistory.latitude, lastRouteHistory.longitude],
      fullscreenControl: true,
      timeDimensionControl: true,
      timeDimensionControlOptions: {
        timeSliderDragUpdate: true,
        timeSteps: -1,
        loopButton: true,
        playerOptions: {
          transitionTime: 1000,
          loop: false
        },
        timeZones: ["Local"]
      },
      timeDimensionOptions: {
        period: "PT10M",
        timeInterval: lastRouteHistory.time.toString() + '/' + firstRouteHistory.time.toString(),
        currentTime: lastRouteHistory.time
      },
      timeDimension: true,
      zoom: 14
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

  private addBoundary() {
    L.geoJSON(JSON.parse(this.geoJson), {
      style: {color: "#F64E60"}
    }).addTo(this.map);
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
    const firstRouteHistory = this.routeHistory[0];
    const lastRouteHistory = this.routeHistory[this.routeHistory.length - 1];

    var data = this.dataToGeoJson();

    const icon = L.icon({
      iconUrl: "data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3EStockholm-icons / Map / Marker1%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Stockholm-icons-/-Map-/-Marker1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect id='bound' x='0' y='0' width='24' height='24'%3E%3C/rect%3E%3Cpath d='M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z' id='Combined-Shape' fill='%23000000' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/svg%3E",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    this.routeHistoryLayer = L.geoJSON(data, {
      pointToLayer: function(feature, latLng) {
        if (feature.properties.hasOwnProperty("last")) {
          return new L.Marker(latLng, {
            icon: icon
          });
        }
        return L.circleMarker(latLng);
      }
    });

    this.routeHistoryTimeLayer = L.timeDimension.layer.geoJson(
      this.routeHistoryLayer,
      {
        timeInterval: lastRouteHistory.time.toString() + '/' + firstRouteHistory.time.toString(),
        currentTime: lastRouteHistory.time,
        updateTimeDimension: true,
        duration: "PT10M",
        updateTimeDimensionMode: "replace",
        addlastPoint: true
      }
    );

    // Show both layers: the geoJSON layer to show the whole track
    // and the timedimension layer to show the movement of the bus
    this.routeHistoryLayer.addTo(this.map);
    this.routeHistoryTimeLayer.addTo(this.map);

    const times = this.map.timeDimension.getAvailableTimes();
    this.map.timeDimension.setCurrentTime(times[times.length - 1]);
  }

  private removeRouteHistory(): void {
    this.map.removeLayer(this.routeHistoryLayer);
    this.map.removeLayer(this.routeHistoryTimeLayer);
  }
}
