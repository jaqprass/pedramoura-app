import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email!: string;
  senha!: string;
  erro: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
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
          this.router.navigate(['/tabs/home']);
        })
        .catch((error) => {
          this.presentErrorToast();
          this.senha = '';
        });
    } else {
      this.erro = 'Por favor, informe o email e/ou a senha.';
      setTimeout(() => {
        this.erro = null;
      }, 4000);
    }
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Erro no login',
      duration: 2000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  fechar() {
    this.router.navigate(['tabs/home']);
  }
}
