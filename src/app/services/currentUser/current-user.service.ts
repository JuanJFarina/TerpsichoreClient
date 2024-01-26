import { Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  #currentUser = signal<User | null>(
    localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')!)
  )

  get currentUser(): User | null {
    console.log(this.#currentUser())
    return this.#currentUser()
  }

  setCurrentUser(currentUser: User) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    this.#currentUser.set(currentUser)
  }

  deleteCurrentUser(): void {
    localStorage.removeItem('currentUser')
    this.#currentUser.set(null)
  }
  constructor() { }
}
