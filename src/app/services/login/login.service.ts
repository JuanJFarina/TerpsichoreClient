import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  #http = inject(HttpClient);

  login(username: string, password: string) {
    return this.#http.post(`${environment.API_URL}/api/auth/login`, {
      username,
      password,
    });
  }
}
