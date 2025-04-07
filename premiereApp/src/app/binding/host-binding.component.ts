import {Component} from '@angular/core';

@Component({
  selector: 'app-host-binding',
  imports: [],
  host: {
    '[class]': "isActive ? 'active' : ''",
    '(click)': 'test()',
  },
  template: `
    <p>
      host-binding works!
    </p>
  `,
  styles: ``
})
export class HostBindingComponent {
  isActive = true;

  test() {
    console.log('enfant');
  }
}
