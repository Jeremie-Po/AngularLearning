import {Component} from '@angular/core';
import {NgContentComponent} from './ng-content.component';

@Component({
  selector: 'app-ng-content-parent',
  imports: [
    NgContentComponent
  ],
  template: `
    <app-ng-content>
      <h1 class="title">HelloWorld !</h1>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto asperiores assumenda culpa
        cupiditate deleniti deserunt, dolore earum eligendi eum expedita id maiores mollitia optio quisquam tempore
        velit voluptas!
      </p>

    </app-ng-content>
    <app-ng-content>
      <h1>Hello World !</h1>
      <button>Click me</button>
    </app-ng-content>
  `,
  styles: ``
})
export class NgContentParentComponent {

}
