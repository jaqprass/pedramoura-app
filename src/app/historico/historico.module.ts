import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoricoPage } from './historico.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HistoricoPageRoutingModule } from './historico-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HistoricoPageRoutingModule,
  ],
  declarations: [HistoricoPage],
})
export class HistoricoPageModule {}
