import {Component} from '@angular/core';
import {HidePipe} from '../shared/pipes/hide.pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [
    HidePipe
  ],
  template: `
    <p>
      Exemple de création d'un pipe qui cache le mot de passe affiché
    </p>
    <div>
      {{ password | hide : 3 }}
    </div>
  `,
  styles: ``
})
export class CustomPipesComponent {
  password = '123456789';
}
