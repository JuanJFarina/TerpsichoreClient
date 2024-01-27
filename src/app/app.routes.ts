import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthComponent } from './modules/auth/auth.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {
        path: "", component: AuthComponent,
        canActivate: [authGuard]
    },

    {
        path: "login", component: LoginComponent,
        canActivate: [guestGuard]
    },

    {
        path: "registration", component: RegistrationComponent,
        canActivate: [guestGuard]
    }
];
