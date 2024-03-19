import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
// import { AuthComponent } from './modules/auth/auth.component';
import { RegistrationComponent } from './modules/registration/registration.component';
// import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { LandingComponent } from './modules/landing/landing.component';
import { HomeComponent } from './modules/landing/home/home.component';
import { AboutComponent } from './modules/landing/about/about.component';
import { ContactComponent } from './modules/landing/contact/contact.component';
import { CoursesComponent } from './modules/landing/courses/courses.component';
import { RoutesEnum } from './constants/routes';

export const routes: Routes = [
    {
        path: RoutesEnum.Home, component: LandingComponent,
        children: [
            {path: RoutesEnum.Home, component: HomeComponent},
            {path: RoutesEnum.LandingAbout, component: AboutComponent},
            {path: RoutesEnum.LandingContact, component: ContactComponent},
            {path: RoutesEnum.LandingCourses, component: CoursesComponent}
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
