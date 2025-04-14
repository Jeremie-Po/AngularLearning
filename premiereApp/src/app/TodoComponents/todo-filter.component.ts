import {Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-filter',
  imports: [
    FormsModule
  ],
  template: `
    <input type="text" placeholder="Rechercher" class="border py-6" [(ngModel)]="filter">
  `,
  styles: ``
})
export class TodoFilterComponent {
  filter = model('')
}
