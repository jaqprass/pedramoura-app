import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  ionViewWillEnter() {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  onButtonClick() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.auth.logout();
    } else {
      this.router.navigate(['login']);
    }
  }
}
