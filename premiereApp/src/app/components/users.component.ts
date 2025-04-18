import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink
  ],
  template: `
    <h2>
      users
    </h2>
    <ul>
      @for (user of users; track user.id) {
        <li [routerLink]="[user.id]">{{ user.name }}</li>
        <!--        Dans le cas au dessus on part de l'url existant pour le liens et dans el cas suivant on repart de zéro pour creer le l 'url-->
          <!--        <li [routerLink]="['/users',user.id]">{{ user.name }}</li>-->
      }
    </ul>
  `,
  styles: ``
})
export class UsersComponent {
  users = [
    {
      id: '1',
      name: 'Pierre'
    },
    {
      id: '2',
      name: 'Paul'
    },
    {
      id: '3',
      name: 'Jack'
    }
  ]
}
