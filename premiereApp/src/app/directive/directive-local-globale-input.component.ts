import {Component} from '@angular/core';
import {InputLocaleDirective} from '../shared/directives/input-locale.directive';
import {InputGlobalDirective} from '../shared/directives/input-global.directive';
import {InputInputDirective} from '../shared/directives/input-input.directive';

@Component({
  selector: 'app-directive-local-globale-input',
  imports: [
    InputLocaleDirective,
    InputGlobalDirective,
    InputInputDirective
  ],
  template: `
    <p>
      pemet de changer la couleur du texte de l'input a chaque fois qu'une lettre est taper dans l'input
    </p>
    <input appInputLocale type="text">
    <p>
      pemet de changer la couleur du texte de l'input a chaque fois qu'une lettre est taper dans la window
    </p>
    <input appInputGlobal type="text">
    <p>
      pemet de passer des données input depuis le composant à la directive
    </p>
    <input appInputInput="Hello" type="text">
  `,
  styles: ``
})
export class DirectiveLocalGlobaleInputComponent {

}
