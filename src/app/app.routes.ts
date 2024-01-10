import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthComponent } from './modules/auth/auth.component';
import { RegistrationComponent } from './modules/registration/registration.component';

export const routes: Routes = [
    {
        path: "", component: AuthComponent
    },

    {
        path: "login", component: LoginComponent
    },

    {
        path: "registration", component: RegistrationComponent
    }
];
