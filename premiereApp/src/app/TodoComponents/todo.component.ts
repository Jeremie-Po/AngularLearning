import {Component, effect, input, output} from '@angular/core';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    @let t = todo();
    <li class="flex gap-12 border px-12">
      <p (click)="selectTodo.emit(todo()._id)" class="flex-auto">{{ t.name }}</p>
      <input (click)="toggleTodo.emit(todo()._id)" type="checkbox" [checked]="t.done">
    </li>
  `,

})
export class TodoComponent {
  todo = input.required<Todo>();
  toggleTodo = output<string>();
  selectTodo = output<string>();
}
