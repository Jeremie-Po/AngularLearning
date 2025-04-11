import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-computed',
  imports: [
    FormsModule
  ],
  template: `
    <input type="text" [(ngModel)]="username"/>
    <h1>{{ helloInFr() }}</h1>
    <!-- <h1>{{ helloInEs }}</h1> -->
    <!-- <h1>{{ helloInEn }}</h1> -->
    <button (click)="reverseShowHello()">show</button>
  `,
  styles: ``,
})
export class ComputedComponent {
  username = signal('');
  count = signal(0);
  showHello = signal(false);

  helloInFr = computed(() => {
    console.log('in function');
    if (this.showHello()) {
      return `Bonjour ${this.username()} ${this.count()}`;
    } else {
      return 'Bonjour';
    }
  });

  reverseShowHello() {
    this.showHello.update((old) => !old);
  }

  // helloInEs = computed(() => {
  //   return `Hola ${this.username()}`;
  // });

  // helloInEn = computed(() => {
  //   return `Hello ${this.username()}`;
  // });
}

