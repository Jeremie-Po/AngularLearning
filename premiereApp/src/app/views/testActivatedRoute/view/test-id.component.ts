import {Component, computed, effect, inject, input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-test-id',
  imports: [],
  template: `
    <p>
      test dont l id est {{ id() }}
    </p>
    <p>
      query params : {{ age() }}

    </p>
  `,
  styles: ``
})
export class TestIdComponent {
  id = input.required<string>();

  activatedRoute = inject(ActivatedRoute);

  queryParams = toSignal(this.activatedRoute.queryParams);
  age = computed(() => this.queryParams()?.['age']);

  constructor() {
    effect(() => {
      console.log(this.activatedRoute);
      console.log(this.queryParams());
    })
  }
}
