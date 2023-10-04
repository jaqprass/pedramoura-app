import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { authGuard } from '../services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'entregas',
        loadChildren: () =>
          import('../entregas/entregas.module').then(
            (m) => m.EntregasPageModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'historico',
        loadChildren: () =>
          import('../historico/historico.module').then(
            (m) => m.HistoricoPageModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'pedidos/:id',
        loadChildren: () =>
          import('../pedidos/pedidos.module').then((m) => m.PedidosPageModule),
        canActivate: [authGuard],
      },
      {
        path: 'pedido/:id',
        loadChildren: () =>
          import('../pedido/pedido.module').then((m) => m.PedidoPageModule),
        canActivate: [authGuard],
      },
      {
        path: 'mapa',
        loadChildren: () =>
          import('../mapa/mapa.module').then((m) => m.MapaPageModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
