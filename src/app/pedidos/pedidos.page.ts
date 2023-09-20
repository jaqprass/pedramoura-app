import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  rotaId: number = 0;
  pedidos: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rotaId = params['id'];

      this.pedidos = this.obterPedidosPorRota(this.rotaId);
    });
  }

  obterPedidosPorRota(rotaId: number): any[] {
    // Consultar serviço para buscar os pedidos

    // TODO: remover mock
    return [
      {
        id: 1,
        nomeCliente: 'Jaqueline',
        endereco: 'Av. Inconfidência 1002, Canoas',
        observacoes: 'Portão Amarelo',
        telefone: '(51) 99257-8631',
        itensPedido: ['1 kg - Carne moída', '5 kg - Picanha'],
      },
      {
        id: 2,
        nomeCliente: 'Rodrigo',
        endereco: 'R. Marechal 782, Canoas',
        observacoes: 'Em frente ao mercado do Rogério',
        telefone: '(51) 99278-8481',
        itensPedido: ['3 kg - Coxão de dentro', 'Carvão 5kg'],
      },
    ];
  }

  verPedido(pedidoId: number) {
    this.router.navigate(['tabs/pedido', pedidoId]);
  }
}
