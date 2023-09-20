import { Component } from '@angular/core';
import { RotasService } from '../services/rotas/rotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregas',
  templateUrl: 'entregas.page.html',
  styleUrls: ['entregas.page.scss'],
})
export class EntregasPage {
  rotas: any[] = []; //Criar uma classe para definir o objeto de retonro do back

  constructor(private rotasService: RotasService, private router: Router) {}

  ngOnInit() {
    this.carregarRotas();
  }

  ionViewWillEnter() {
    this.carregarRotas();
  }

  carregarRotas() {
    this.rotasService.getRotas().subscribe((data) => {
      this.rotas = data;
    });
  }

  verDetalhes(rotaId: number) {
    this.router.navigate(['tabs/pedidos', rotaId]);
  }
}
