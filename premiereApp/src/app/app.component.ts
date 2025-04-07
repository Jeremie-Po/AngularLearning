import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DymaComponent} from './dyma/dyma.component';
import {DymaSFCComponent} from './dyma-sfc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DymaComponent, DymaSFCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proot';
}
