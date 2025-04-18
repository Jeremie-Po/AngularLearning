import {Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page.component';
import {UsersComponent} from './components/users.component';

export const routes: Routes = [
  {
    path: 'users',
    //La difference entre les deux : component charge le composant lors du 1er chunk
    //loadcomponent va charger le composant lorsqu'on en aura besoin (lazyLoading)
    // component: UsersComponent,
    loadComponent: async () => (await import('./components/users.component')).UsersComponent,
    //pathmatch full permet de faire matcher la route exact, prefix 'doit commencer par'
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePageComponent,
  },
];
