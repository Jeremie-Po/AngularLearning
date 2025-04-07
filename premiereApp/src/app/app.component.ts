import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DymaComponent} from './dyma/dyma.component';
import {DymaSFCComponent} from './dyma-sfc.component';
import {PropertyBindingComponent} from './binding/property-binding.component';
import {EventBindingComponent} from './binding/event-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DymaComponent, DymaSFCComponent, PropertyBindingComponent, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proot';
}
