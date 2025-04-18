import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <p>
      user works! {{ id() }} {{ age() }}
    </p>
  `,
  styles: ``
})
export class UserComponent {
  id = input.required<string>();
  age = input.required<number>();

}
