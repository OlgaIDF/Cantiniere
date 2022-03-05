import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    firstname: null,
    address: null,
    town: null,
    postalCode: null,
    phone: null,
    sex: null,
    isLunchLady: false,
    wallet: null,
    image64: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, firstname, address, postalCode, town, phone, sex, isLunchLady, wallet, image64 , email, password} = this.form;
    this.authService.register(name, firstname, address, postalCode, town, phone, sex, isLunchLady,wallet,image64, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.isSignUpFailed = true;
      }
    });
  }
}

