import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  console.log(route, state);
  const {answer} = await (await fetch('https://yesno.wtf/api')).json();
  //possibilité de faire une injection de service
  console.log(answer);
  return answer === 'yes' ? true : router.parseUrl('/forbidden');
};
