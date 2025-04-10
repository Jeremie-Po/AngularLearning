import {Component} from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [],
  template: `
    <p> variable contextuelle let</p>
    @let a = b;
    <button (click)="b = b + 1">+1</button>
    <h1>{{ a }}</h1>
    <p>Référence</p>
    <button (click)="test(moninput)">test</button>
    <input type="text" #moninput/>
  `,
  styles: ``
})
export class LetComponent {
  b = 0;

  test(moninput: HTMLInputElement) {
    console.log(moninput.value);
  }

}


