import { Component, OnInit } from '@angular/core';
import { RotasService } from '../services/rotas/rotas.service';
import { Rota } from '../interfaces/rotas.interface';

@Component({
  selector: 'app-historico',
  templateUrl: 'historico.page.html',
  styleUrls: ['historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  rotas: Rota[] = [];

  constructor(private rotasService: RotasService) {}

  ngOnInit() {
    this.carregarRotas();
  }

  carregarRotas() {
    this.rotasService.getRotasEntregues().subscribe({
      next: (data) => {
        data ? (this.rotas = data.rotas) : (this.rotas = []);
      },
      error: (error) => {
        console.error('Erro ao buscar as rotas entregues:', error);
      },
    });
  }
}
