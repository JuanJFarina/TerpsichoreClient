import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
// import { AuthComponent } from './modules/auth/auth.component';
import { RegistrationComponent } from './modules/registration/registration.component';
// import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { LandingComponent } from './modules/landing/landing.component';
import { RoutesEnum } from './constants/routes';

export const routes: Routes = [
    {
        path: RoutesEnum.Home, component: LandingComponent,
        children: [
            {
                path: RoutesEnum.Home, 
                loadComponent: ()=> import('./modules/landing/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: RoutesEnum.LandingAbout,
                loadComponent: ()=> import('./modules/landing/about/about.component').then(m => m.AboutComponent)
            },
            {
                path: RoutesEnum.LandingContact,
                loadComponent: ()=> import('./modules/landing/contact/contact.component').then(m => m.ContactComponent)
            },
            {
                path: RoutesEnum.LandingCourses,
                loadComponent: ()=> import('./modules/landing/courses/courses.component').then(m => m.CoursesComponent)
            }
        ]
    },
    {
        path: RoutesEnum.Login, component: LoginComponent,
        canActivate: [guestGuard]
    },

    {
        path: RoutesEnum.Registration, component: RegistrationComponent,
        canActivate: [guestGuard]
    }
];
