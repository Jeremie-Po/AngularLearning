import {Directive, inject, signal} from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    '[style.color]': 'textColor()',
  },
})
export class InputDirective {

  private element = inject(ElementRef<HTMLInputElement>);
  textColor = signal<string>('black');

  constructor() {
    const inputElement = this.element.nativeElement;

    // Écoute les changements de texte dans l'input
    inputElement.addEventListener('input', () => {
      const color = inputElement.value.trim().toLowerCase();
      this.updateColor(color);
    });
  }

  // Met à jour la couleur en fonction de la saisie
  private updateColor(color: string) {
    const colors: Record<string, string> = {
      rouge: 'red',
      bleu: 'blue',
      vert: 'green',
      jaune: 'yellow',
      noir: 'black',
      blanc: 'white',
      gris: 'gray',
    };

    // Vérifie si la clé existe dans l'objet colors avant de l'utiliser
    this.textColor.set(color in colors ? colors[color] : color);
  }
}


// exemple de changement d'attribut dans la vidéo :
//
// import { Directive, ElementRef, inject, signal } from '@angular/core';
//
// @Directive({
//   selector: '[appInput]',
//   host: {
//     // [style.color]: 'getColor()',
//     // '[style.color]': '"blue"',
//     '[style.color]': 'color()',
//   },
// })
// export class InputDirective {
//   myhost = inject(ElementRef<HTMLInputElement>);
//   color = signal<string>('purple');
//
//   constructor() {
//     console.log('in directive');
//     console.log(this.myhost);
//     setTimeout(() => {
//       this.color.set('red');
//     }, 3000);
//     // this.myhost.nativeElement.style.color = 'red';
//   }
//
//   getColor() {
//     return 'orange';
//   }
// }
