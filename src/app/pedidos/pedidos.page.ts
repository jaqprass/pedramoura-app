import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RotasService } from '../services/rotas/rotas.service';
import { Pedido, Pedidos } from '../interfaces/pedidos.interface';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  rotaId: number = 0;
  pedidos: Pedido[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rotasService: RotasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rotaId = params['id'];
      this.obterPedidosPorRota(this.rotaId);
    });
  }

  obterPedidosPorRota(rotaId: number) {
    this.rotasService.getPedidos(rotaId).subscribe({
      next: (data) => {
        data ? (this.pedidos = data.pedidos) : (this.pedidos = []);
      },
      error: (error) => {
        console.error('Erro ao buscar os pedidos da rota:', error);
      },
    });
  }

  verPedido(pedidoId: number) {
    this.router.navigate(['tabs/pedido', pedidoId]);
  }

  verMapa() {
    const enderecos = this.pedidos.map((pedido) => pedido.endereco);
    this.router.navigate(['tabs/mapa'], { state: { enderecos: enderecos } });
  }
}
