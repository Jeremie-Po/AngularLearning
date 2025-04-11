import {Component} from '@angular/core';
import {TodoFormComponent} from './todo-form.component';
import {TodoListComponent} from './todo-list.component';

@Component({
  selector: 'app-todo-container',
  imports: [
    TodoFormComponent,
    TodoListComponent
  ],
  template: `
    <app-todo-form/>
    <app-todo-list/>
  `,
  styles: ``
})
export class TodoContainerComponent {

}
