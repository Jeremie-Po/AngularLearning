import {Component} from '@angular/core';

import {
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
  DecimalPipe,
  JsonPipe,
} from '@angular/common';


@Component({
  selector: 'app-basic-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, JsonPipe],
  template: `
    <h1>{{ name | uppercase }}</h1>
    <h1>{{ name | uppercase | lowercase }}</h1>
    <h1>{{ name | titlecase }}</h1>
    <h1>{{ result | number : '0.2-2' }}</h1>
    <pre>{{ user | json }}</pre>
  `,
})
export class BasicPipesComponent {
  name = 'louis';
  result = 1 / 3;
  user = {
    local: {
      email: 'test@gmail.com',
    },
    city: {
      name: 'Paris',
    },
  };
}



