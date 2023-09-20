import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoricoPage } from './historico.page';

import { HistoricoPageRoutingModule } from './historico-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HistoricoPageRoutingModule],
  declarations: [HistoricoPage],
})
export class HistoricoPageModule {}
