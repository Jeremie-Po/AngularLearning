import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-test-activated-route',
  imports: [
    RouterOutlet,
    JsonPipe
  ],
  template: `
    <p>
      test Activated Route
    </p>
    <ul>
      @for (test of tests; track test.id) {
        <li (click)="naviguerVersComposant(test.id)">{{ test.name }}</li>
      }
    </ul>
    <pre>{{ data() | json }}</pre>
    <strong> {{ answer() }}</strong>
    <router-outlet/>

  `,
  styles: ``
})
export class TestActivatedRouteComponent {
  constructor(private router: Router) {
  }

  activatedRoute = inject(ActivatedRoute);

  data = toSignal(this.activatedRoute.data);
  answer = computed(() => this.data()?.['answer'])
  tests = [
    {
      id: '1',
      name: 'test1'
    },
    {
      id: '2',
      name: 'test2'
    },
    {
      id: '3',
      name: 'test3'
    },
  ]

  naviguerVersComposant(id: string) {
    this.router.navigate(['tests', id], {
      queryParams: {
        age: '12',
      },
      fragment: 'Je suis le fragment',

    })
  }

  canDeactivate() {
    return false;
  }
}
