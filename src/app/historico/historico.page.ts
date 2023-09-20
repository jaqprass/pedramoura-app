import { Component, OnInit } from '@angular/core';
import { RotasService } from '../services/rotas/rotas.service';

@Component({
  selector: 'app-historico',
  templateUrl: 'historico.page.html',
  styleUrls: ['historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  rotasEntrega: any[] = []; //Criar uma classe para definir o objeto de retonro do back

  constructor(private rotasService: RotasService) {}

  ngOnInit() {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.rotasService.getRotasEntregues().subscribe((data) => {
      this.rotasEntrega = data;
    });

    console.log(this.rotasEntrega);
  }
}
