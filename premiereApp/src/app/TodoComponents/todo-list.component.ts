import {Component, effect, input} from '@angular/core';
import {TodoComponent} from './todo.component';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoComponent
  ],
  template: `
    <ul class="flex flex-col gap-12">
      @for (todo of todos(); track todo.id) {
        <app-todo [todo]="todo"/>

      }
    </ul>
  `,
  styles: `
    ul {
      margin-top: 12px;
    }
  `
})
export class TodoListComponent {
  todos = input<Todo[]>();

  constructor() {
    effect(() => {
      console.log(this.todos());
    })
  }
}
