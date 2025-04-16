import {Component, effect, inject, signal} from '@angular/core';
import {TodoFormComponent} from './todo-form.component';
import {TodoListComponent} from './todo-list.component';
import {Todo, TodoForm} from '../shared/interfaces';
import {TodosService} from '../shared/services/todos.service';

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
  // todoList = signal<Todo[]>([
  //   {
  //     'id': '1',
  //     'name': 'Apprendre Angular',
  //     'done': false,
  //   },
  //   {
  //     'id': '2',
  //     'name': 'Apprendre Java',
  //     'done': false,
  //   },
  //   {
  //     'id': '3',
  //     'name': 'Apprendre Laravel',
  //     'done': true,
  //   }
  // ])
  todoList = signal<Todo[]>([]);
  todoService = inject(TodosService);


  addTodo(todo: TodoForm) {
    this.todoService.addTodo(todo);
  }

  toggleTodo(todoId: string) {
    this.todoList.update((todoList) => todoList.map((todo) => {
      if (todoId === todo._id) {
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
