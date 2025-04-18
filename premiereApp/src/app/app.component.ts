import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
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
import {DirectiveStructurelleComponent} from './directive/directive-structurelle.component';
import {BasicPipesComponent} from './pipes/basic-pipes.component';
import {CurrencyDatePipesComponent} from './pipes/currency-date-pipes.component';
import {CustomPipesComponent} from './pipes/custom-pipes.component';
import {HomePageComponent} from './components/home-page.component';
import {UsersComponent} from './components/users.component';

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
    DirectiveStructurelleComponent,
    BasicPipesComponent,
    CurrencyDatePipesComponent,
    CustomPipesComponent,
    HomePageComponent,
    UsersComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proot';
  private router = inject(Router);

  navigateToUser() {
    this.router.navigate(['users'], {
      queryParams: {
        id: '1',
        name: 'Louis',
      },
      fragment: 'frag',
    });
    // this.router.navigateByUrl('users');
  }
}
