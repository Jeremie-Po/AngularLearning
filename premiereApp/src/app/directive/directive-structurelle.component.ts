import {Component} from '@angular/core';
import {InputStructurelleDirective} from '../shared/directives/input-structurelle.directive';

@Component({
  selector: 'app-directive-structurelle',
  imports: [
    InputStructurelleDirective
  ],
  template: `
    <!--    // cas 1 on active le composant et on récupère la valeur de la varialbe hello fournit par la directive-->
    <input type="text" *appInputStructurelle="let i = hello" [value]="i">
  `,
  styles: ``
})
export class DirectiveStructurelleComponent {

}
