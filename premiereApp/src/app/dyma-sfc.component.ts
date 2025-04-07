import {Component} from '@angular/core';

@Component({
  selector: 'app-dyma-sfc',
  imports: [],
  template: `
    <p class="red">
      dyma-sfc works!
    </p>
    <ul>
      <li>{{ title + nombre }}</li>
      <li>{{ isLoggedin }}</li>
      <li>{{ nombre }}</li>
      <li>{{ name }}</li>
      <li>{{ 1 + 1 }}</li>
      <li>{{ isLoggedin ? 'connecté' : 'non connecté' }}</li>
      <li>{{ displayName() }}</li>
      <li>{{ user.name }}</li>
    </ul>
  `,
  styles: `
    .red {
      color: red;
    }
  `
})
export class DymaSFCComponent {
  title = 'Dyma';
  isLoggedin = true;
  nombre = 42;
  name: string | undefined;
  user = {
    name: 'Jean',
  };

  displayName() {
    return 'hello';
  }
}
