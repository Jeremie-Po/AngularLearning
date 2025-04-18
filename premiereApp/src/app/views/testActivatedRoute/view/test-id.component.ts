import {Component, input} from '@angular/core';

@Component({
  selector: 'app-test-id',
  imports: [],
  template: `
    <p>
      test dont l id est {{ id() }}
    </p>
  `,
  styles: ``
})
export class TestIdComponent {
  id = input.required<string>();
}
