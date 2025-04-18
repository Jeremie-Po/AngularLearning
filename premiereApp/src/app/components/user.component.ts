import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <p>
      user works! {{ id() }}
    </p>
  `,
  styles: ``
})
export class UserComponent {
  id = input.required<string>();
}
