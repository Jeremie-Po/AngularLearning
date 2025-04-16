import {Injectable, resource, signal} from '@angular/core';
import {Todo, TodoForm} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  BASE_URL = 'https://restapi.fr/api/atodos';
  selectedTodoId = signal<string | null>(null)

  todosResource = resource({
    loader: async (): Promise<Todo[]> => (await fetch(this.BASE_URL)).json(),
  })

  selectedTodoIdResource = resource({
    request: this.selectedTodoId,
    loader: async ({request}): Promise<Todo | undefined> => {
      if (request) {
        return (await fetch(`${this.BASE_URL}/${request}`)).json();
      } else {
        return;
      }
    }

  })

  selectTodo(todoId: string) {
    this.selectedTodoId.set(todoId);
  }

  constructor() {
  }

  async addTodo(todo: TodoForm) {
    try {
      const response = await fetch(this.BASE_URL, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json'
        },
      });
      const body = await response.json()
      if (response.ok) {
        this.todosResource.update((todos) => {

          return [...todos ?? [], body];
        });
        console.log('BODYYY', body)
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }

  }
}
