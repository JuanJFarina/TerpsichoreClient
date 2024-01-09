import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    imports: [CommonModule, ReactiveFormsModule]
})
export class RegistrationComponent {

  registerForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]),
    email: new FormControl<string>('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      
    ]),
    password: new FormControl<string>('',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]),
    password_2: new FormControl<string>('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)
    ])
    
  }, [this.passwordMatch("password", "password_2")])

  
  passwordMatch(password:string, password_2:string){
    return (form:AbstractControl): ValidationErrors | null => {
      const password_value = form.get(password)?.value
      const password_2_value = form.get(password_2)?.value

      if (password_value === password_2_value){
        return null;
      }
      return {passwordMatch: true}
    }
  }
  

}
