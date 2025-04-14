import {Component, computed, effect, input, output, signal} from '@angular/core';
import {TodoComponent} from './todo.component';
import {Todo} from '../shared/interfaces';
import {TodoFilterComponent} from './todo-filter.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoComponent,
    TodoFilterComponent
  ],
  template: `
    <hr/>
    <app-todo-filter [filter]="filter()" (filterChange)="filter.set($event)"/>
    <hr/>
    <ul class="flex flex-col gap-12">
      @for (todo of filteredTodos(); track todo.id) {
        <app-todo [todo]="todo" (toggleTodo)="toggleTodo.emit($event)"/>

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
  filter = signal<string>('');
  todos = input<Todo[]>([]);
  toggleTodo = output<string>();

  filteredTodos = computed(() =>
    this.todos().filter((t) => t.name.toLowerCase().includes(this.filter()))
  )

  constructor() {
    effect(() => {
      console.log('filter', this.filter());
      console.log('FILTERED TODO', this.filteredTodos());
    })
  }
}
