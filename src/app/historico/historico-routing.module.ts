import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoPage } from './historico.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoPageRoutingModule {}
