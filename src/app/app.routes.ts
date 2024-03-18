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

export const routes: Routes = [
    {
        path: "", component: LandingComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'courses', component: CoursesComponent}
        ]
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
