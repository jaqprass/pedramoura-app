import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData: any;

  constructor(private auth: Auth, private router: Router) {}

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
      })
      .catch((error) => {
        throw error;
      });
  }

  logout() {
    return this.auth
      .signOut()
      .then(() => {
        localStorage.clear();
        this.router.navigate(['login']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
