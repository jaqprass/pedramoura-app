import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage as LoginPage } from './login.page';

import { LoginPageRoutingModule as LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, LoginPageRoutingModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
