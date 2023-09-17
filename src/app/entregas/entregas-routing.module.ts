import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregasPage } from './entregas.page';

const routes: Routes = [
  {
    path: '',
    component: EntregasPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregasPageRoutingModule {}
