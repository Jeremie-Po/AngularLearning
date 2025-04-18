import {Routes} from '@angular/router';
import {UserComponent} from './views/user.component';

export const routes: Routes = [
  {
    path: ':id/:age',
    component: UserComponent,
  }
];
