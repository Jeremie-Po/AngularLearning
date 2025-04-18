import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <p>
      {{ id() }} {{ age() }}
    </p>
  `,
  styles: ``
})
export class UserComponent {
  id = input.required<string>();
  age = input.required<number>();

}
