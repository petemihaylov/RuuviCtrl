import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {SlaDto} from '../../_models/slaDto.model';
import {Time} from '../_models/Time.model';
import {AssetsService} from '../../_services/assets.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {AssetDto} from '../../../../pages/dashboard/_models/assetDto.model';
import {RuuviWebsocket} from '../../../../pages/dashboard/_models/ruuvi-websocket.model';
import {SlaAssetsService} from '../../_services/slaAssets.service';

@Component({
  selector: 'app-sla-form',
  templateUrl: './sla-form.component.html',
  styleUrls: ['./sla-form.component.scss']
})
export class SlaFormComponent implements OnInit {

  localSla: SlaDto = ({} as SlaDto);
  localValid: boolean;

  timeTemperature: Time;
  timeHumidity: Time;
  timePressure: Time;
  timeLocation: Time;

  @Input()
  set sla(sla: SlaDto) {
    console.log(sla);
    if (sla) {
      this.slaChange.emit(sla);
      this.localSla = sla;
      this.setTimeStringsToArrays();
    } else {
      this.localSla = ({} as SlaDto);
    }
  }
  get sla() {
    return this.localSla;
  }

  @Input()
  set valid(val: boolean) {
    this.validChange.emit(val);
    this.localValid = false;
    }
  get valid() {
    return this.localValid;
  }

  @Output()
  slaChange: EventEmitter<SlaDto> = new EventEmitter<SlaDto>();
  @Output()
  validChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  seconds = true;

  private _assets: BehaviorSubject<AssetDto[]> = new BehaviorSubject([]);
  public Assets: Observable<AssetDto[]> = this._assets.asObservable();

  constructor(private assetsService: AssetsService, private slaAssets: SlaAssetsService ) { }

  ngOnInit(): void {
    const listSub = this.assetsService.list().subscribe(res => {
      console.log(res);
      this._assets.next(res);
    });

    this.slaAssets.ActiveAssets(this.sla.id).subscribe(res => {

    });
  }

  private dateToString = (time) => `${(time.hour <= 9) ? '0' + time.hour : time.hour}:${(time.minute <= 9) ? '0' + time.minute : time.minute}:${(time.second <= 9) ? '0' + time.second : time.second}`;
  private stringToTime(time: string): Time{
    if (time) {
      const timeArray = time.split(':');
      if (timeArray.length === 3) {
        return {hour: Number(timeArray[0]), minute: Number(timeArray[1]), second: Number(timeArray[2])} as Time;
      }
    }
    return {hour: 0, minute: 0, second: 0};
  }

  setTimeArrayToStrings(){
    this.localSla.tempratureTime = this.dateToString(this.timeTemperature);
    this.localSla.humidityTime = this.dateToString(this.timeHumidity);
    this.localSla.pressureTime = this.dateToString(this.timePressure);
    this.localSla.locationTime = this.dateToString(this.timeLocation);
  }

  setTimeStringsToArrays(){
    this.timeTemperature = this.stringToTime(this.localSla.tempratureTime);
    this.timeHumidity = this.stringToTime(this.localSla.humidityTime);
    this.timePressure = this.stringToTime(this.localSla.pressureTime);
    this.timeLocation = this.stringToTime(this.localSla.locationTime);
  }

  isValid(){
    this.setTimeArrayToStrings();
    this.setTimeStringsToArrays();
    let valid = true;

    if(this.localSla.title == null || this.localSla.title.length === 0){
      valid = false;
    }
    if ( this.localSla.hasTempratureBoundry ) {
      if (this.localSla.tempratureTime === '00:00:00') {
        valid = false;
      }
      if (!this.localSla.tempratureCount) {
        valid = false;
      }
    }

    if ( this.localSla.hasHumidityBoundry ){
      if (this.localSla.humidityTime === '00:00:00') {
        valid = false;
      }
      if (!this.localSla.humidityCount) {
        valid = false;
      }
    }

    if ( this.localSla.hasPressureBoundry ){
      if (this.localSla.pressureTime === '00:00:00') {
        valid = false;
      }
      if (!this.localSla.pressureCount) {
        valid = false;
      }
    }

    if ( this.localSla.hasLocationBoundry ){
      if (this.localSla.locationTime === '00:00:00') {
        valid = false;
      }
      if (!this.localSla.locationCount) {
        valid = false;
      }
    }

    this.localValid = valid;
    this.validChange.emit(valid);
  }

}
