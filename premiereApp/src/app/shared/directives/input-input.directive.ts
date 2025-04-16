import {computed, Directive, effect, ElementRef, inject, input, signal} from '@angular/core';

@Directive({
  selector: '[appInputInput]',
  host: {},
})
export class InputInputDirective {
  appInputInput = input<string>('')

  constructor() {
    console.log('InputInput', this.appInputInput())
  }

}
