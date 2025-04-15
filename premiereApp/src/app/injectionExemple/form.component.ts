import {Component, inject} from '@angular/core';
import {ChosesService} from '../shared/services/choses.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule
  ],
  template: `
    <input type="text" [(ngModel)]="chose">
    <button (click)="add()">Ajouter</button>
  `,
  styles: ``
})
export class FormComponent {
  chose = '';
  chosesService = inject(ChosesService)

  add() {
    this.chosesService.add(this.chose);
  }
}
