import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntregasPage } from './entregas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EntregasPageRoutingModule } from './entregas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EntregasPageRoutingModule,
  ],
  declarations: [EntregasPage],
})
export class EntregasPageModule {}
