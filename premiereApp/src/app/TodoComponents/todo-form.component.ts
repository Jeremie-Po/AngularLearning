import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  template: `
    <input type="text" placeholder="Entrer une tâche" class="flex-auto">
    <button class="btn btn-primary"> Ajouter</button>
  `,
  styles: `
    :host {
      display: flex;
      gap: 2px;
    }

    input {
      border-radius: 4px;
      border: 1px solid var(--gray-100);
    }

  `
})
export class TodoFormComponent {

}
