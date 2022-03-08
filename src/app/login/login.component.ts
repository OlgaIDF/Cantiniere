import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isLunchLady = false;
  roles: Array<any> = [];

  constructor(private authService: AuthService, private tokenStorage: TokenService, private router: Router) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: data => {
        let jwtToken = data.headers.get('Authorization');
        this.tokenStorage.saveToken(jwtToken);
        //this.tokenStorage.saveUser(jwtToken.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        const dataUser : any = jwt_decode(jwtToken);
        const testUser = JSON.stringify(dataUser.user);
        console.log(testUser);

        //console.log(dataUser);
        //let testUser = JSON.parse(dataUser.user);
        //const resultUser = localStorage.setItem('user', jwt_decode(jwtToken.user));
        //console.log(resultUser);

        let testLady = JSON.stringify(dataUser.user.isLunchLady);
        console.log('resultat test lady : '+testLady);

        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    this.router.navigateByUrl('');
  }
}
function jwt_decode(jwtToken: any): any {
  throw new Error('Function not implemented.');
}

