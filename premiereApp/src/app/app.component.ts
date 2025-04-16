import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DymaComponent} from './dyma/dyma.component';
import {DymaSFCComponent} from './dyma-sfc.component';
import {PropertyBindingComponent} from './binding/property-binding.component';
import {EventBindingComponent} from './binding/event-binding.component';
import {DoubleDataBindingComponent} from './binding/double-data-binding.component';
import {HostBindingComponent} from './binding/host-binding.component';
import {IfComponent} from './structuralDirective/if.component';
import {SwitchComponent} from './structuralDirective/switch.component';
import {ForComponent} from './structuralDirective/for.component';
import {LetComponent} from './structuralDirective/let.component';
import {SignalsComponent} from './signals/signals.component';
import {ComputedComponent} from './signals/computed.component';
import {EffectComponent} from './signals/effect.component';
import {LinkedProductComponent} from './signals/linked-product.component';
import {TodoContainerComponent} from './TodoComponents/todo-container.component';
import {FruitParentComponent} from './fruitComponent/fruit-parent.component';
import {NgContentParentComponent} from './ngContent/ng-content-parent.component';
import {FormComponent} from './injectionExemple/form.component';
import {ListComponent} from './injectionExemple/list.component';
import {DirectiveComponent} from './directive/directive.component';
import {DirectiveLocalGlobaleInputComponent} from './directive/directive-local-globale-input.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DymaComponent,
    DymaSFCComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DoubleDataBindingComponent,
    HostBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    LetComponent,
    SignalsComponent,
    ComputedComponent,
    EffectComponent,
    LinkedProductComponent,
    TodoContainerComponent,
    FruitParentComponent,
    NgContentParentComponent,
    FormComponent,
    ListComponent,
    DirectiveComponent,
    DirectiveLocalGlobaleInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proot';
}
