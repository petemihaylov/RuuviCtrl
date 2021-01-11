import { Component, OnInit, Input } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';

@Component({
  selector: 'app-popup',
  template: `
            <div>
                    <div>
                        <img src="https://static.thenounproject.com/png/159069-200.png" width="28" height="28"/>
                    </div> 
                    <div> <b>Name: </b>  {{item.name}}  </div>
                    <div> <b>Temperature: </b>  {{item.temperature[item.temperature.length - 1].value}} °C</div>
                    <div> <b>Pressure: </b>{{item.pressure[item.pressure.length - 1].value}} Pa</div>
                    <div> <b>Humidity: </b>{{item.humidity[item.humidity.length - 1].value}} %</div>
            </div> `,
            styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input('assetData') item: AssetDto;

  constructor() { }

  ngOnInit() {
  }

}