import {Component} from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  template: `
    <ul>
      <li>
        exemple dans le code avec if elseif else
        @if (isLoggedin) {
          <p>
            Je suis dans le if
          </p>
        } @else if (isLoggedin === 2) {
          <p>
            je ne suis pas dans le if
          </p>
        } @else {
          <p>
            error
          </p>
        }
      </li>
      <li>
        <p> exemple avec 'as' pour simplifiier la syntaxe</p>
        @if (user.adress.city; as city) {
          <p>
            Je suis dans la ville de {{ city }}
          </p>
        }
      </li>

    </ul>
  `,
  styles: ``
})
export class IfComponent {
  // isLoggedin: boolean | undefined
  isLoggedin = 1;
  user = {
    adress: {
      city: 'Paris',
    },
  }
}
