import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  template: `
    <ul>
      <li class="flex gap-12">
        <p class="flex-auto">todo</p>
        <input type="checkbox">
      </li>
    </ul>
  `,
  styles: ``
})
export class TodoListComponent {

}
