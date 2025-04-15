import {inject, Injectable, signal} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ChosesService {
  loggerService = inject(LoggerService);

  choses = signal<string[]>([]);

  add(text: string) {
    this.choses.update((c) => {
      return [...c, text];
    })
    console.log(this.choses());
  };

  remove(index: number) {
    this.choses.update((chose) =>
      chose.filter((c, i) => i !== index)
    )
  }

  log(text: string) {
    this.loggerService.log(text);
  }


  constructor() {
  }
}
