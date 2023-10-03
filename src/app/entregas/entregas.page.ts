import { Component } from '@angular/core';
import { RotasService } from '../services/rotas/rotas.service';
import { Router } from '@angular/router';
import { Rota } from '../interfaces/rotas.interface';

@Component({
  selector: 'app-entregas',
  templateUrl: 'entregas.page.html',
  styleUrls: ['entregas.page.scss'],
})
export class EntregasPage {
  rotas: Rota[] = [];

  constructor(private rotasService: RotasService, private router: Router) {}

  ngOnInit() {
    this.carregarRotas();
  }

  ionViewWillEnter() {
    this.carregarRotas();
  }

  carregarRotas() {
    this.rotasService.getRotas().subscribe({
      next: (data) => {
        data ? (this.rotas = data.rotas) : (this.rotas = []);
      },
      error: (error) => {
        console.error('Erro ao buscar os dados de rotas:', error);
      },
    });
  }

  verDetalhes(rotaId: number) {
    this.router.navigate(['tabs/pedidos', rotaId]);
  }
}
