import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CurrentUserService } from '../services/currentUser/current-user.service';
import { RoutesEnum } from '../constants/routes';

export const guestGuard: CanActivateFn = (route, state) => {
  return inject(CurrentUserService).currentUser
  ? inject(Router).navigate([`/${RoutesEnum.Home}`])
  : true;
};
