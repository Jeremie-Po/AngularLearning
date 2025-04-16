import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-currency-date-pipes',
  imports: [
    CurrencyPipe,
    DatePipe,
  ],
  template: `
    <h1>{{ price | currency:'EUR' }}</h1>
    <h1>{{ today | date:'EEEE 1 LLLL YYYY' }}</h1>
  `,
  styles: ``
})
export class CurrencyDatePipesComponent {
  price = 50;
  today = new Date();
}
