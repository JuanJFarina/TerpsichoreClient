import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesEnum } from '../../../constants/routes';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  routesEnum = RoutesEnum
}
