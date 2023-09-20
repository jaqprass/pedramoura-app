import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  pedidoId: number = 0;
  detalhePedido: any = undefined;
  obsEntrega: string = '';
  statusEntrega: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pedidoId = params['id'];

      this.detalhePedido = this.obterDetalhesPedido(this.pedidoId);
    });
  }

  obterDetalhesPedido(pedidoId: number): any {
    return {
      id: 1,
      rotaId: 13,
      nomeCliente: 'Jaqueline',
      endereco: 'Av. Inconfidência 1002, Canoas',
      observacoes: 'Portão Amarelo',
      telefone: '(51) 99257-8631',
      itensPedido: ['1 kg - Carne moída', '5 kg - Picanha'],
      statusEntrega: null,
      observacoesEntrega: '',
    };
  }

  marcarEntrega() {
    this.detalhePedido.statusEntrega = this.statusEntrega;
  }

  salvarObservacoes() {
    this.detalhePedido.observacoesEntrega = this.obsEntrega;
    this.router.navigate(['tabs/pedidos', this.detalhePedido.rotaId]);
  }

  voltar() {
    this.router.navigate(['tabs/pedidos', this.detalhePedido.rotaId]);
  }
}
