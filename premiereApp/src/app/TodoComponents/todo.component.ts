import {Component, effect, input, output} from '@angular/core';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    @let t = todo();
    <li class="flex gap-12 border px-12">
      <p (click)="selectTodo.emit(t._id)" class="flex-auto">{{ t.name }}</p>
      <input (click)="toggleTodo()" type="checkbox" [checked]="t.done">
    </li>
  `,

})
export class TodoComponent {
  todo = input.required<Todo>();
  updateTodo = output<Todo>();
  selectTodo = output<string>();

  toggleTodo() {
    this.updateTodo.emit({...this.todo(), done: !this.todo().done})
  }
}
