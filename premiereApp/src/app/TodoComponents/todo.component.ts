import {Component, input, output} from '@angular/core';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    @let t = todo();
    <li class="flex gap-12 border px-12">
      <p class="flex-auto">{{ t.name }}</p>
      <input type="checkbox" [checked]="t.done">
    </li>
  `,
  host: {
    '(click)': "toggleTodo.emit(todo()._id)"
  },
  styles: ``
})
export class TodoComponent {
  todo = input.required<Todo>();
  toggleTodo = output<string>();
}
