export interface Product{
    _id: number;
    imagen: string;
    imagenes?: string[];
    titulo: string;
    descripcion: string;
    precio: number;
    savedAt?: string;
}

export interface CartItem extends Product {
    cantidad: number;
  }