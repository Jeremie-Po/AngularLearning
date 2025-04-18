import {Routes} from '@angular/router';
import {HomePageComponent} from './views/home-page.component';
import {UsersComponent} from './views/users/users.component';
import {NotFoundComponent} from './views/not-found.component';
import {UserComponent} from './views/users/views/user.component';

export const routes: Routes = [
  {
    path: 'users',
    //La difference entre les deux : component charge le composant lors du 1er chunk
    //loadcomponent va charger le composant lorsqu'on en aura besoin (lazyLoading)
    // component: UsersComponent,
    loadComponent: async () => (await import('./views/users/users.component')).UsersComponent,
    //pathmatch full permet de faire matcher la route exact, prefix 'doit commencer par'
    // pathMatch: 'full',
    // children: [
    //   {
    //     path: ':id/:age',
    //     component: UserComponent,
    //   }
    // ],
    loadChildren: async () => (await import('./views/users/users.routes')).routes
  },

  {
    path: 'users/:id/:age',
    component: UserComponent,
  },
  //
  {
    path: 'users/:id',
    component: UserComponent,
  },


  {
    path: 'toto',
    // redirect permet de rediriger l'url vers une autre'
    redirectTo: 'users',
  },

  {
    path: '',
    component: HomePageComponent,
  },

  {
    // route wild Card qui permet d'être utiliser qd aucune route n'existe
    path: '**',
    component: NotFoundComponent,
  }
];
