import {Component, computed, inject} from '@angular/core';
import {ChosesService} from '../shared/services/choses.service';

@Component({
  selector: 'app-list',
  imports: [],
  template: `
    <ul>
      @for (chose of choses(); track $index) {
        <li>{{ chose }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class ListComponent {
  chosesServices = inject(ChosesService);
  choses = this.chosesServices.choses;

}
