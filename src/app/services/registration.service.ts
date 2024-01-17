import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { environment } from '../../enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  #http = inject(HttpClient);

  register(data: User) {
    return this.#http.post(`${environment.API_URL}/auth/login`, data)
  }

  constructor() { }
}
