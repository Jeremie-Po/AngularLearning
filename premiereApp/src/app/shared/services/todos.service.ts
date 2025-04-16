import {Injectable} from '@angular/core';
import {TodoForm} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  BASE_URL = 'https://restapi.fr/api/atodos';

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
        console.log({body})
      } else {
        throw new Error('Oops');
      }
    } catch (e) {
      throw new Error('Oops');
    }

  }
}
