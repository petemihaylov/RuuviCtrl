import { Component, OnInit, Input } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';

@Component({
  selector: 'app-popup',
  template: `
            <div>
                    <div>
                        <img src="https://static.thenounproject.com/png/159069-200.png" width="28" height="28"/>
                        <b> {{item.deviceId}} </b>
                    </div> 
                    <div> <b>name: </b>  {{item.name}}  </div>
                    <div> <b>pressure: </b>   
                    {{item.pressure[item.pressure.length - 1].value}} Pa
                    </div>
                    <div> <b>humidity: </b>{{item.humidity[item.humidity.length - 1].value}} %</div>
                    <div> <b>temperature: </b>  {{item.temperature[item.temperature.length - 1].value}} °C</div>
            </div> `,
            styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input('assetData') item: AssetDto;

  constructor() { }

  ngOnInit() {
  }

}