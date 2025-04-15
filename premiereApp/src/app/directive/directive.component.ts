import {Component} from '@angular/core';
import {InputDirective} from '../shared/directives/input.directive';

@Component({
  selector: 'app-directive',
  imports: [InputDirective],
  template: `
    <input appInput type="text">
  `,
  styles: ``
})
export class DirectiveComponent {

}
