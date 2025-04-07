import {Component} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<input [type]="inputType"/>`,
})
export class PropertyBindingComponent {
  inputType = 'date';

  constructor() {
    setTimeout(() => {
      this.inputType = 'number';
    }, 3000);
  }
}
