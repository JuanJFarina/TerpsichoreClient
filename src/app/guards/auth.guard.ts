import { CanActivateFn, Router } from '@angular/router';
import { CurrentUserService } from '../services/currentUser/current-user.service';
import { inject } from '@angular/core';
import { RoutesEnum } from '../constants/routes';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(CurrentUserService).currentUser
  ? true
  : inject(Router).navigate([`/${RoutesEnum.Login}`]);
};
