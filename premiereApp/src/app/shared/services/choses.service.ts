import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChosesService {
  choses = signal<string[]>([]);

  add(text: string) {
    this.choses.update((c) => {
      return [...c, text];
    })
    console.log(this.choses);
  };

  constructor() {
  }
}
