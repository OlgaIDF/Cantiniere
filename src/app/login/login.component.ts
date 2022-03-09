import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
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
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({// méthode subscribe qui permet de souscrire à un Observable et être notifié des nouvelles valeurs et des erreurs
      next: data => { //callbacks de capture de la valeur en retour
        let jwtToken = data.headers.get('Authorization'); // Stockage du token récupéré de l api dans une variable
        this.tokenStorage.saveToken(jwtToken); // stockage du token dans le cache du navigateur
        //this.tokenStorage.saveUser(jwtToken.user);
        this.isLoginFailed = false; // Variable login échoué sur false
        this.isLoggedIn = true; // Variable login réussi sur true
        const dataUser : any = jwt_decode(jwtToken); // Décrypte le token
        const testUser = JSON.stringify(dataUser.user); // Récupère les données User dans le token décrypté
        console.log(testUser);

        //console.log(dataUser);
        //let testUser = JSON.parse(dataUser.user);
        //const resultUser = localStorage.setItem('user', jwt_decode(jwtToken.user));
        //console.log(resultUser);

        let testLady = JSON.stringify(dataUser.user.isLunchLady); //récupèration du status admin/user de l'utilisateur connecté isLunchLady sur True/False

        console.log('resultat test lady : '+testLady);

        this.reloadPage();
      },
      error: err => { //callbacks de capture d'erreur
        this.errorMessage = err.error.message; // Récupération du message d'erreur
        this.isLoginFailed = true; // Variable login échoué sur true
      }
    });
  }

  reloadPage(): void {
    this.router.navigateByUrl('');
  }
}
