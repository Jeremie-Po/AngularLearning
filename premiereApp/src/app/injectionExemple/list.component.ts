import {Component, computed, inject} from '@angular/core';
import {ChosesService} from '../shared/services/choses.service';

@Component({
  selector: 'app-list',
  imports: [],
  template: `
    <ul>
      @for (chose of choses(); track $index) {
        <li (click)="remove($index)">{{ chose }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class ListComponent {
  chosesServices = inject(ChosesService);

  remove(index: number) {
    this.chosesServices.remove(index);
  }

  choses = this.chosesServices.choses;

}
