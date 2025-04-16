import {Component} from '@angular/core';
import {InputLocaleDirective} from '../shared/directives/input-locale.directive';

@Component({
  selector: 'app-directive-local-globale-input',
  imports: [
    InputLocaleDirective
  ],
  template: `
    <p>
      pemet de changer la couleur du texte de l'input a chaque fois qu'une lettre est taper dans l'input
    </p>
    <input appInputLocale type="text">
    <p></p>
  `,
  styles: ``
})
export class DirectiveLocalGlobaleInputComponent {

}
