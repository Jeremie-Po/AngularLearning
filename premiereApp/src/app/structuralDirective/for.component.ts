import {Component} from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  template: `
    <ul>
      @for (user of users; track $index) {
        <li [class.first]="$first" [class.last]="$last">
          {{ user }} | index: {{ $index }} | count: {{ $count }} | first: {{ $first }} | last: {{ $last }} |
          even: {{ $even }} | odd: {{ $odd }}
        </li>
      } @empty {
        <p>Aucun user</p>
      }
    </ul>
  `,
  styles: `
    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      border: 1px solid #888;
      border-bottom: 0;
    }

    .first {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .last {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: 1px solid #888;
    }

    .even {
      background-color: #999;
    }
  `,
})
export class ForComponent {
  users = ['Jean', 'Paul', 'Louis']
}

