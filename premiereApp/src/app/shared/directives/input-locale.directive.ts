import {computed, Directive, effect, ElementRef, inject, input, signal} from '@angular/core';

@Directive({
  selector: '[appInputLocale]',
  host: {
    '[style.color]': 'color()',
    '(keydown)': 'keydown($event)',
  },
})
export class InputLocaleDirective {

  color = computed(() => this.colors[this.colorIndex()]);
  colorIndex = signal(0);
  colors = ['red', 'blue', 'green', 'yellow'];

  constructor() {
  }

  keydown(event: KeyboardEvent) {
    console.log(event);
    this.colorIndex.update((i) => ++i % 4);
  }
}
