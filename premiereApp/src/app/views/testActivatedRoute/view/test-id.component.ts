import {Component, computed, effect, inject, input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-test-id',
  imports: [
    JsonPipe
  ],
  template: `
    <p>
      test dont l id est {{ id() }}
    </p>
    <p>
      query params : {{ age() }}
    </p>
    <p>
      fragment : {{ fragment() }}
    </p>
    <p>
      title qui se trouve dans la route : {{ title() }}
    </p>
    <p>
      cle data :
    </p>
    <pre>{{ data() | json }}</pre>

  `,
  styles: ``
})
export class TestIdComponent {
  id = input.required<string>();

  activatedRoute = inject(ActivatedRoute);

  queryParams = toSignal(this.activatedRoute.queryParams);
  age = computed(() => this.queryParams()?.['age']);

  fragment = toSignal(this.activatedRoute.fragment);

  title = toSignal(this.activatedRoute.title);

  data = toSignal(this.activatedRoute.data);

  constructor() {
    effect(() => {
      console.log(this.activatedRoute);
      console.log(this.queryParams());
    })
  }
}
