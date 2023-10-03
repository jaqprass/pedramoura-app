export interface Rotas {
  rotas: Rota[];
}

export interface Rota {
  dataEntrega: string;
  id: number;
  kms: number;
  quantidade: number;
  status: string;
}
