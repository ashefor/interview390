import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label, MultiLineLabel } from 'ng2-charts';
import { Observable } from 'rxjs';
import { analytics } from 'src/app/dashboard/interfaces/analytics';
import { tap, map } from 'rxjs/operators';
import { element } from 'protractor';
import { errorMessage } from 'src/app/dashboard/interfaces/error';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  selectedDay: number = 5;
  selectedDate: Date;
  analyticsIncome : number[] = [];
  analyticsDate: string[] = [];
  @Input('allAnalytics$') allAnalytics$: Observable<analytics[]>
  @Input() error$: Observable<errorMessage>;
  
  public lineChartData: ChartDataSets[] = [{data: [234]}];
  public lineChartLabels: Label;
  public lineChartOptions: (ChartOptions & {annotation: any}) = {
    // responsive: true,
    // maintainAspectRatio: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            stepSize: 10000,
            min: 10000,
            fontSize: 12,
            fontFamily: "'Gayathri', sans-serif;",
            callback: function(label, index, labels) {
              return `$${label}`
            }
        }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'red',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    }
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() { }

  ngOnInit(): void {
   this.addValueToGraph()
  }

  addValueToGraph() {
    this.allAnalytics$?.forEach((data: analytics[]) => {
      this.analyticsIncome = data.map((child) => child.income);
      this.analyticsDate = data.sort((a,b) => a.spend_day - b.spend_day).map((child) => `${child.spend_month.slice(0, 3)} ${child.spend_day}`)
    this.lineChartLabels = [...this.analyticsDate.splice(0, this.selectedDay)]
    this.lineChartData = [
      { data: [...this.analyticsIncome.splice(0, this.selectedDay)], label: 'Income' }
    ];
    })
  }
  changeDays(event) {
    this.selectedDay = event;
    this.addValueToGraph();
  }
}
