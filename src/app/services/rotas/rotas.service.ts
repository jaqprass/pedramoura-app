import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rotas } from 'src/app/interfaces/rotas.interface';
import { Pedido, Pedidos } from 'src/app/interfaces/pedidos.interface';

@Injectable({
  providedIn: 'root',
})
export class RotasService {
  private apiUrl = 'http://127.0.0.1:5000/'; // Substitua pela URL do servidor backend

  constructor(private http: HttpClient) {}

  getRotasEntregues(): Observable<Rotas> {
    return this.http.get<Rotas>(`${this.apiUrl}/rotas?status=ENTREGUE`);
  }

  getRotas(): Observable<Rotas> {
    return this.http.get<Rotas>(`${this.apiUrl}/rotas`);
  }

  getPedidos(rotaid: number): Observable<Pedidos> {
    var result = this.http.get<Pedidos>(
      `${this.apiUrl}/pedidos?idRota=${rotaid}`
    );
    return result;
  }

  getPedido(id: number): Observable<Pedido> {
    var result = this.http.get<Pedido>(`${this.apiUrl}/pedidos/${id}`);
    return result;
  }

  atualizaPedido(id: number, pedidoAtualizado: Pedido): Observable<Pedido> {
    const url = `${this.apiUrl}/pedidos/${id}`;
    return this.http.put<Pedido>(url, pedidoAtualizado);
  }
}
