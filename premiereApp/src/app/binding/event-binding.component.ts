import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  template: `
    <div
      (mouseenter)="displayHi()"
      (click)="exemple($event, 'hi')"
      class="square">
      {{ title }}
    </div>
  `,
  styles: [`
    .square {
      height: 200px;
      width: 200px;
      background-color: red;
    }
  `]
})
export class EventBindingComponent {
  title = '';

  exemple(event: MouseEvent, title: string) {
    console.log(event);
    console.log(title);
  }

  displayHi() {
    this.title = 'Hi';
  }
}
