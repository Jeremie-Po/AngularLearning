import {Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page.component';
import {UsersComponent} from './components/users.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  }
];
