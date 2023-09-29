import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RotasService {
  rotasEntrega = [
    //todo: mock - deve ser removido depois
    {
      id: 1,
      quantidade: 10,
      dataEntrega: '20/09/2023',
      kms: 102,
      status: 'Entregue',
    },
    {
      id: 2,
      quantidade: 23,
      dataEntrega: '20/09/2023',
      kms: 214,
      status: 'Entregue',
    },
    {
      id: 3,
      quantidade: 8,
      dataEntrega: '20/09/2023',
      kms: 25,
      status: 'Entregue',
    },
    {
      id: 4,
      quantidade: 10,
      dataEntrega: '20/09/2023',
      kms: 102,
      status: 'Entregue',
    },
    {
      id: 5,
      quantidade: 23,
      dataEntrega: '20/09/2023',
      kms: 214,
      status: 'Entregue',
    },
    {
      id: 6,
      quantidade: 8,
      dataEntrega: '20/09/2023',
      kms: 25,
      status: 'Entregue',
    },
    {
      id: 7,
      quantidade: 23,
      dataEntrega: '20/09/2023',
      kms: 214,
      status: 'Entregue',
    },
    {
      id: 8,
      quantidade: 8,
      dataEntrega: '20/09/2023',
      kms: 25,
      status: 'Entregue',
    },
  ];

  private apiUrl = 'URL_DO_SEU_SERVIDOR'; // Substitua pela URL do servidor

  constructor(private http: HttpClient) {}

  getRotasEntregues(): Observable<any[]> {
    var result = this.http.get<any[]>(this.apiUrl + '/rotasEntregues');
    return of(this.rotasEntrega); // return result;
  }

  getRotas(): Observable<any[]> {
    var result = this.http.get<any[]>(this.apiUrl + '/rotasEntregues');
    //TODO: remover for abaixo
    var r = JSON.parse(JSON.stringify(this.rotasEntrega));
    for (let i = 0; i < r.length; i++) {
      r[i].status = 'Pronta para entrega';
      if (r[i].id < 10) r[i].id += 12;
    }
    return of(r); // return result;
  }
}
