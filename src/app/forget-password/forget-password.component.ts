import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  message: string = "";
  forgetPassword: boolean = false;
  form: any = {
    email: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  resendingPassword(): void {
    const { email } = this.form;
    this.authService.resendPassword(email).subscribe( res => {
      this.message = "Un email vous a été envoyé avec votre mot de passe";
      this.isLoggedIn = false;
    },
    error => {
      this.errorMessage = error.message;
      this.isLoginFailed = true;
    });

  }

}
