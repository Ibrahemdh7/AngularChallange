import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {
  public chartOptions: any;
  private ApexCharts: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('ng-apexcharts').then(module => {
        this.ApexCharts = module;
        this.initializeChart();
      });
    }
  }

  private initializeChart(): void {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
     
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
        ]
      },
      dataLabels: {
        enabled: false
      }
    };
  }
}