import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email!: string;
  senha!: string;
  erro: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
    this.email = '';
    this.senha = '';
  }

  ionViewWillEnter() {
    this.email = '';
    this.senha = '';
  }

  entrar() {
    if (this.email && this.senha) {
      this.auth
        .login(this.email, this.senha)
        .then(() => {
          this.router.navigate(['tabs/home']);
        })
        .catch((error) => {
          console.error(error);
          this.erro = 'Erro no login.';
          setTimeout(() => {
            this.erro = null;
          }, 4000);
          this.email = '';
          this.senha = '';
        });
    } else {
      this.erro = 'Por favor, informe o email e/ou a senha.';
      setTimeout(() => {
        this.erro = null;
      }, 4000);
    }
  }

  fechar() {
    this.router.navigate(['tabs/home']);
  }
}
