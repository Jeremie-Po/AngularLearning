import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  template: `
    <h1>Compteur : {{ compteur() }}</h1>
    <button (click)="incrementer()">+1</button>
    <button (click)="reinitialiser()">Réinitialiser</button>
  `,
})
export class SignalsComponent {
  compteur = signal(0); // Signal modifiable initialisé à 0

  incrementer() {
    this.compteur.update((valeurActuelle) => valeurActuelle + 1); // Incrémente la valeur
  }

  reinitialiser() {
    this.compteur.set(0); // Réinitialise la valeur à 0
  }
}


