import {Component} from '@angular/core';
import {InputDirective} from '../shared/directives/input.directive';

@Component({
  selector: 'app-directive',
  imports: [InputDirective],
  template: `
    <p> le texte de l'input changera en fonction de la couleur ecrite dans l/'input (rouge, red, vert,green...</p>
    <input appInput type="text">
  `,
  styles: ``
})
export class DirectiveComponent {

}
