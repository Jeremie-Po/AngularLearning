import {Component, effect, signal} from '@angular/core';
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
    <app-todo-form (addTodo)="addTodo($event)"/>
    <app-todo-list [todos]="todoList()" (toggleTodo)="toggleTodo($event)"/>
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

  addTodo(todo: Todo) {
    return this.todoList.update((todoList) => [...todoList, todo]);
  }

  toggleTodo(todoId: string) {
    this.todoList.update((todoList) => todoList.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    }))
  }

  constructor() {
    effect(() => {
      console.log(this.todoList());
    })
  }
}
