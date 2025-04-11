import {Component, signal} from '@angular/core';
import {TodoFormComponent} from './todo-form.component';
import {TodoListComponent} from './todo-list.component';
import {Todo} from '../shared/interfaces';

@Component({
  selector: 'app-todo-container',
  imports: [
    TodoFormComponent,
    TodoListComponent
  ],
  template: `
    <app-todo-form/>
    <app-todo-list [todos]="todoList()"/>
  `,
  styles: ``
})
export class TodoContainerComponent {
  todoList = signal<Todo[]>([
    {
      'id': '1',
      'name': 'Apprendre Angular',
      'done': false,
    },
    {
      'id': '2',
      'name': 'Apprendre Java',
      'done': false,
    },
    {
      'id': '3',
      'name': 'Apprendre Laravel',
      'done': true,
    }
  ])


}
