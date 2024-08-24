import { Component } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html'
})
export class ThirdPageComponent {
  step = 1;
activeIndex: any;

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }
}
