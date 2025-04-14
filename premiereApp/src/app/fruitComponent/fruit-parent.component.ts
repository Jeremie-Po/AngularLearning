import {Component, ElementRef, viewChild, viewChildren, signal, effect} from '@angular/core';
import {FruitComponent} from './fruit.component';


@Component({
  selector: 'app-fruit-parent',
  imports: [FruitComponent],
  template: `
    <input #myinput type="text" placeholder="Ajoutez un fruit..."/>
    <button (click)="addFruit()">Ajouter</button>
    <app-fruit/>
    <ul>
      @for (fruit of fruits(); track fruit) {
        <li #lis>
          {{ fruit }}
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class FruitParentComponent {
  myinput = viewChild<ElementRef<HTMLInputElement>>('myinput');
  fruit = viewChild(FruitComponent);
  fruitsRef = viewChildren(FruitComponent);
  lis = viewChildren<ElementRef<HTMLLIElement>>('li');

  fruits = signal<string[]>(['Fraise', 'Pomme']);

  addFruit() {
    const input = this.myinput()?.nativeElement;
    if (input) {
      const fruit = input.value.trim();
      if (fruit) {
        this.fruits.update((fs) => [...fs, fruit]);
        input.value = '';
      }
    }
  }

  constructor() {
    effect(() => {
      console.log('🍏 Input:', this.myinput()?.nativeElement);
      console.log('🍎 FruitComponent instances:', this.fruitsRef()?.map(f => f.title));
      console.log('🍊 Liste des <li>:', this.lis()?.map(li => li.nativeElement.innerText));
      console.log('fruitComponent', this.fruit())
    });
  }
}

