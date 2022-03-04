import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  email?: string;

  constructor(public authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = !this.tokenService.getUser();
    if(this.isLoggedIn){
      const user = this.tokenService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_LUNCHLADY');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.email = user.email;
    }
  }

  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }

}
