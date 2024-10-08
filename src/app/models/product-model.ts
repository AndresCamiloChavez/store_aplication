export interface Product {
  descripcion: string;
  id: string;
  timestamp: Timestamp;
  cantidad: string;
  precio: string;
  nombre: string;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}
