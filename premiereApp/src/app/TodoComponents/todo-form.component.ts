import {Component, input, output} from '@angular/core';
import {Todo} from '../shared/interfaces';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [
    FormsModule
  ],
  template: `
    <input [(ngModel)]="todoName" type="text" placeholder="Entrer une tâche" class="flex-auto">
    <button (click)="addFormTodo()" class="btn btn-primary"> Ajouter</button>
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
  todoName: string = '';

  addTodo = output<Todo>()

  addFormTodo() {
    if (this.todoName) {
      const newTodo: Todo = {
        name: this.todoName,
        done: false,
        id: '' + Math.floor(Math.random() * 1001),
      }
      this.todoName = '';
      this.addTodo.emit(newTodo);
    }
  }
}
