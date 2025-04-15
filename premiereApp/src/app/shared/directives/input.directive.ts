import {Directive} from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor() {
    console.log('In directive')
  }

}
