export interface Pedido {
  endereco: string;
  id: number;
  idRota: number;
  itensPedido: string[];
  nomeCliente: string;
  observacoes: string;
  observacoesEntrega: string;
  statusEntrega: string;
  telefone: string;
}

export interface Pedidos {
  pedidos: Pedido[];
}
