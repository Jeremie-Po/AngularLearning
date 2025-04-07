import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-double-data-binding',
  imports: [
    FormsModule
  ],
  template: `
    <input type="text" [(ngModel)]="title"/>
    <br/>
    <p>{{ title }}</p>
  `,
  styles: ``
})
export class DoubleDataBindingComponent {
  title = 'Bonjour';
}
