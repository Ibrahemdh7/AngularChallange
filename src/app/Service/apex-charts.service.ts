import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApexChartsService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async loadApexCharts(): Promise<any> {
    if (this.isBrowser) {
      // Dynamically import ApexCharts if running in the browser
      const module = await import('apexcharts');
      return module.default;  // Access the default export
    }
    return null;
  }
}
