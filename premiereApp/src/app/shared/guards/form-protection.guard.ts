import {CanDeactivateFn} from '@angular/router';
import {TestActivatedRouteComponent} from '../../views/testActivatedRoute/test-activated-route.component';

export const formProtectionGuard: CanDeactivateFn<TestActivatedRouteComponent> = (component, currentRoute, currentState, nextState) => {
  const canINavigate = component.canDeactivate();
  return canINavigate;
};
