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
    request: () => ({
      id: this.selectedTodoId()
    }),
    //abortSignal : permet d'annuler une requete en cours si un nouveau request est emis
    //previous un objet contenant le statut précédent
    loader: async ({request: {id}, abortSignal, previous}): Promise<Todo | undefined> => {
      console.log('PREVIOUS', previous);
      if (id) {
        return (await fetch(`${this.BASE_URL}/${id}`, {signal: abortSignal})).json();
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
        // this.todosResource.update((todos) => {
        //
        //   return [...todos ?? [], body];
        // });
        this.todosResource.reload();
        console.log('BODYYY', body)
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }

  }

  async updateTodo(todo: Todo) {
    try {
      const {_id, ...restTodo} = todo;
      const response = await fetch(`${this.BASE_URL}/${_id}`, {
        method: "PATCH",
        body: JSON.stringify(restTodo),
        headers: {
          'Content-type': 'application/json'
        },
      });
      const body = await response.json()
      if (response.ok) {
        this.todosResource.update((todos) =>
          todos?.map((t) => (t._id === (body as Todo)._id ? body : t)));
        this.selectedTodoIdResource.reload()
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }

  }

  async deleteTodo(id: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        this.todosResource.update((todos) => {
          return todos?.filter(({_id}) => (_id !== id))
        });
        if (this.selectedTodoId() === id) {
          this.selectedTodoId.set(null);
        }
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }
  }
}
