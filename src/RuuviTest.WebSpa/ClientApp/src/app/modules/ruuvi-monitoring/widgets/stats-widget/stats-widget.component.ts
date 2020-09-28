import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { LayoutService } from '../../../../_metronic/core';
import {StatsWidget, ValueAsset} from '../_models/stats-widget.model';
import {DatePipe, DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-stats-widget',
  templateUrl: './stats-widget.component.html',
})
export class StatsWidgetComponent implements OnChanges {
  chartOptions: any = {};
  fontFamily = '';
  colorsGrayGray500 = '';
  colorsGrayGray200 = '';
  colorsGrayGray300 = '';
  colorsThemeBaseDanger = '';
  colorsThemeBasePrimary = '';
  colorsThemeLightPrimary = '';
  colorsThemeBaseSuccess = '';
  colorsThemeLightSuccess = '';

  @Input() info: StatsWidget;
  @Input() data: any;

  constructor(private layout: LayoutService, private datePipe: DatePipe, private decimalPipe: DecimalPipe) {
    this.fontFamily = this.layout.getProp('js.fontFamily');
    this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500');
    this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200');
    this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300');
    this.colorsThemeBaseDanger = this.layout.getProp(
      'js.colors.theme.base.danger'
    );
    this.colorsThemeBasePrimary = this.layout.getProp(
      'js.colors.theme.base.primary'
    );
    this.colorsThemeLightPrimary = this.layout.getProp(
      'js.colors.theme.light.primary'
    );
    this.colorsThemeBaseSuccess = this.layout.getProp(
      'js.colors.theme.base.success'
    );
    this.colorsThemeLightSuccess = this.layout.getProp(
      'js.colors.theme.light.success'
    );
  }

  currentValue: string;

  ngOnChanges(): void {
    this.chartOptions = this.getChartOptions();
    if (this.data)
    {
      const lastIndex = this.data.length - 1;
      this.currentValue = this.decimalPipe.transform(this.data[lastIndex].value, '1.2-2');
    }
  }

  ngDoCheck() {
    this.chartOptions = this.getChartOptions();

    if (this.data)
    {
      const lastIndex = this.data.length - 1;
      this.currentValue = this.decimalPipe.transform(this.data[lastIndex].value, '1.2-2');
    }
  }

  getChartOptions() {
    return {
      series: [
        {
          name: this.info.title,
          data: this.data.map(({value}) => this.decimalPipe.transform(value, '1.2-2')),
        },
      ],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
        opacity: 1,
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [this.colorsThemeBasePrimary],
      },
      xaxis: {
        categories: this.data.map(({time}) => this.datePipe.transform(time, 'dd/MM/yyyy HH:mm')),
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily,
          },
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: this.colorsGrayGray300,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: this.fontFamily,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily,
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: this.fontFamily,
        },
        y: {
          // tslint:disable-next-line
          formatter: function (val) {
            return val;
          },
        },
      },
      colors: [this.colorsThemeLightPrimary],
      markers: {
        colors: this.colorsThemeLightPrimary,
        strokeColor: [this.colorsThemeLightPrimary],
        strokeWidth: 3,
      },
    };
  }
}
