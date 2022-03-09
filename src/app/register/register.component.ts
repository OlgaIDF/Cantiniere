import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Image } from '../models/image';
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
    image_64: null,
    image_Path: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  img64: Image | undefined;
  image: Image | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    // formatage de l'image
    let filePathTemp = 'img' + '/pict_' + Math.floor(Math.random() * (800 + 1)) + '.png';
    console.log('filepathe temp', filePathTemp);

    this.img64 = new Image(filePathTemp, this.form.image_64);
    this.form.image = this.img64;
    this.form.image_Path = filePathTemp;
    this.form.image_64 = this.img64.image64;
    this.form.image_Id = this.form.length;

    const {name, firstname, address, postalCode, town, phone, sex, isLunchLady, image_64, image_path, wallet, email, password} = this.form;
    // envoi dans la function register des variables pour l'enregistrement d'un user
    this.authService.register(name, firstname, address, postalCode, town, phone, sex, isLunchLady,wallet,image_64,image_path, email, password).subscribe({ // méthode subscribe qui permet de souscrire à un Observable et être notifié des nouvelles valeurs et des erreurs
      next: data => {//callbacks de capture de la valeur en retour
        console.log(data);
        this.isSuccessful = true;// Variable inscription réussi sur true
        this.isSignUpFailed = false;// Variable inscription échoué sur false
      },
      error: err => { //callbacks de capture d'erreur
        this.errorMessage = err.error.message;// Récupération du message d'erreur
        this.isSignUpFailed = true;// Variable inscription échoué sur true
      }
    });
  }
}

