import {Routes} from '@angular/router';
import {HomePageComponent} from './views/home-page.component';
import {UsersComponent} from './views/users/users.component';
import {NotFoundComponent} from './views/not-found.component';
import {UserComponent} from './views/users/views/user.component';
import {TestActivatedRouteComponent} from './views/testActivatedRoute/test-activated-route.component';
import {TestIdComponent} from './views/testActivatedRoute/view/test-id.component';
import {authGuard} from './shared/guards/auth.guard';
import {answerResolver} from './shared/resolvers/answer.resolver';

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
    path: 'tests/:id',
    component: TestIdComponent,
    title: 'page de profil d un utilisateur',
    data: {
      data1: '123',
      data2: '456',
    }
  },

  {
    path: 'tests',
    // canActivate: [authGuard],
    // canActivateChild: [authGuard],
    component: TestActivatedRouteComponent,
    resolve: {
      answer: answerResolver,
    },
    children: [
      {
        path: ':id',
        component: TestIdComponent,
      }
    ]
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
    path: 'forbidden',
    component: NotFoundComponent,
  },

  {
    // route wild Card qui permet d'être utiliser qd aucune route n'existe
    path: '**',
    component: NotFoundComponent,
  }
];
