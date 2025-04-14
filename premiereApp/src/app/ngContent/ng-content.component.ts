import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  imports: [],
  template: `
    <div class="card">
      <div class="title">
        <ng-content select=".title"/>
      </div>
      <div class="content">
        <ng-content select=".content"/>
      </div>
      <div class="default">
        <ng-content select=".default">Contenu par défaut dans le cas ou il n'ya pas de class defaut dans le parent
        </ng-content>
      </div>
    </div>
  `,
  styles: `
    .card {
      border: 1px solid #7e22ce;
      border-radius: 4px;
      padding: 16px;
    }

    .content {
      color: #7e22ce;
    }

    .title {
      color: red;
      font-weight: bold;
    }`,
})
export class NgContentComponent {

}
