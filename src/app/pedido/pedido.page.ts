import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RotasService } from '../services/rotas/rotas.service';
import { Pedido } from '../interfaces/pedidos.interface';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  pedidoId: number = 0;
  detalhePedido: any = undefined;
  pedidos: Pedido | undefined;
  obsEntrega: string = '';
  statusEntrega: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rotasService: RotasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pedidoId = params['id'];
      this.obterDetalhesPedido(this.pedidoId);
    });
  }

  obterDetalhesPedido(pedidoId: number) {
    this.rotasService.getPedido(pedidoId).subscribe({
      next: (data) => {
        this.detalhePedido = data;
        this.statusEntrega = this.detalhePedido.statusEntrega;
        this.obsEntrega = this.detalhePedido.observacoesEntrega;
        console.log(this.obsEntrega);
      },
      error: (error) => {
        console.error('Erro ao buscar detalhes do pedido:', error);
      },
    });
  }

  marcarEntrega() {
    console.log(this.statusEntrega);
    this.detalhePedido.statusEntrega = this.statusEntrega;
  }

  salvarObservacoes() {
    this.detalhePedido.observacoesEntrega = this.obsEntrega;
    this.detalhePedido.statusEntrega = this.statusEntrega;
    this.rotasService
      .atualizaPedido(this.detalhePedido.id, this.detalhePedido)
      .subscribe({
        error: (error) => {
          console.error('Erro ao atualizar pedido:', error);
        },
      });
    this.router.navigate(['tabs/pedidos', this.detalhePedido.idRota]);
  }

  voltar() {
    this.router.navigate(['tabs/pedidos', this.detalhePedido.idRota]);
  }
}
