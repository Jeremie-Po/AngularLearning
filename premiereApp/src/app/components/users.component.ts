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
