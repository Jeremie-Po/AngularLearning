import {Component, computed, effect, inject, signal} from '@angular/core';
import {TodoFormComponent} from './todo-form.component';
import {TodoListComponent} from './todo-list.component';
import {Todo, TodoForm} from '../shared/interfaces';
import {TodosService} from '../shared/services/todos.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-todo-container',
  imports: [
    TodoFormComponent,
    TodoListComponent,
    JsonPipe
  ],
  template: `
    <app-todo-form (addTodo)="addTodo($event)"/>
    <app-todo-list
      [todos]="todoList()"
      (updateTodo)="updateTodo($event)"
      (selectTodo)="selectTodo($event)"
      (deleteTodo)="deleteTodo($event)"
    />
    <pre>{{ selectedTodo() | json }}</pre>
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
  // todoList = signal<Todo[]>([]);

  todoService = inject(TodosService);
  todoList = computed(() => this.todoService.todosResource.value() || []);
  selectedTodo = this.todoService.selectedTodoIdResource.value;


  // exemple de fetch classique : (il faut utiliser l'objet resource en angular)
  // async ngOnInit() {
  //   const list = await (await fetch('https://restapi.fr/api/atodos')).json();
  //   this.todoList.set(list);
  // }


  addTodo(todo: TodoForm) {
    this.todoService.addTodo(todo);
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  selectTodo(todoId: string) {
    this.todoService.selectTodo(todoId);
  }

  deleteTodo(todoId: string) {
    console.log(todoId);
    this.todoService.deleteTodo(todoId);

  }

  constructor() {
    effect(() => {
      console.log(this.todoList());
    })
  }
}
