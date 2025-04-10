import {Component} from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  template: `
    @switch (user.role) {
      @case ('dev') {
        <h1>Dev</h1>
      }
      @case ('admin') {
        <h1>Admin</h1>
      }
      @default {
        <h1>Default</h1>
      }
    }
  `,
  styles: ``
})
export class SwitchComponent {
  user = {
    role: 'dev',
  }
}
