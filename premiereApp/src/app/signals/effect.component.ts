import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  template: `
    <button (click)="incCount()">+1</button>`,

  styles: ``
})
export class EffectComponent {
  count = signal(0);

  incCount() {
    this.count.update((c) => ++c);
  }

  ref = effect((cleanUp) => {
    const refTimeout = setTimeout(() => {
      console.log(this.count());
    }, 5000);

    cleanUp(() => {
      clearTimeout(refTimeout);
    });
  });
}


