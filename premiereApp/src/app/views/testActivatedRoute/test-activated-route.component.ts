import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-activated-route',
  imports: [],
  template: `
    <p>
      test Activated Route
    </p>
    <ul>
      @for (test of tests; track test.id) {
        <li (click)="naviguerVersComposant(test.id)">{{ test.name }}</li>
      }
    </ul>

  `,
  styles: ``
})
export class TestActivatedRouteComponent {
  constructor(private router: Router) {
  }

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
    this.router.navigate(['tests', id])
  }
}
