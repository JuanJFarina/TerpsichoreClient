import { Injectable } from '@angular/core';
import {inject} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CourseEnrollmentService {
  #http = inject(HttpClient)
  // #token = inject(TokenService)

  enrollCourse (courseId: string) {
    // Use token
    return this.#http.put(`${environment.API_URL}/api/course/enroll/${courseId}`, {})
  }

  unrollCourse (courseId: string) {
    // Use token
    return this.#http.delete(`${environment.API_URL}/api/course/dropp-out/${courseId}`)
  }

  constructor() { }
}
