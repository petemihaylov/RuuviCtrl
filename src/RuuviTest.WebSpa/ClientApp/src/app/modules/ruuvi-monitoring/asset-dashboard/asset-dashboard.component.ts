import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RuuviData } from '../_models/ruuvi-data.model';
import { RuuviDataService } from '../_services/ruuvi-data.service';
import {StatsWidget} from '../widgets/_models/stats-widget.model';

@Component({
  selector: 'app-asset-dashboard',
  templateUrl: './asset-dashboard.component.html',
  styleUrls: ['./asset-dashboard.component.scss']
})
export class AssetDashboardComponent implements OnInit {

  Data: Observable<RuuviData[]>;
  temperature: StatsWidget = {
    title: 'Temperature',
    measurementValue: '°C',
    icon: 'Weather/Temperature-half.svg'
  };
  pressure: StatsWidget = {
    title: 'Pressure',
    measurementValue: 'Pa',
    icon: 'Weather/Wind.svg'
  };
  humidity: StatsWidget = {
    title: 'Humidity',
    measurementValue: '%',
    icon: 'Weather/Rain5.svg'
  };

  constructor(private ruuviDataService: RuuviDataService) { }

  ngOnInit(): void {
    this.Data = this.ruuviDataService.list().pipe();
    // console.table(this.ruuviDataService.temperature())
    this.Data.subscribe(value => {
      console.log(value);
      // this.temperature.values = value.temperature;
      // this.pressure.values = value.pressure;
      // this.humidity.values = value.humidity;
    });


  }

}
