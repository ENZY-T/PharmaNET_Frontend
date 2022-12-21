import { SafeUrl } from '@angular/platform-browser';

export interface Product {
  id: string;
  name: string;
  image: string | SafeUrl;
  imageFile?: File;
  category: string;
  stockStatus: 'IN STOCK' | 'OUT OF STOCK';
  price: number;
  quantity: number;
}
export interface Cart {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
export interface MedCards {
  id: string;
  discount:string;
  name: string;
  email:string;
  image: string | SafeUrl;
  imageFile?: File;
  prevPrice: string;
  price: string;
  ratingNumber: string;
}

export const emptyProduct: Product = {
  id: '',
  name: '',
  price: 0.0,
  category: '',
  stockStatus: 'OUT OF STOCK',
  image: '',
  quantity: 0,
};

export const dummyProduct: Product = {
  id: 'esp1',
  name: 'Penicillin',
  price: 12.0,
  category: 'Antibiotics',
  stockStatus: 'IN STOCK',
  image:
    'https://allergyasthmanetwork.org/wp-content/uploads/2016/09/penicillin-medication-1024x538.jpg',
  quantity: 124,
};

export const dummyProduct2: Product = {
  id: 'esp2',
  name: 'penadol',
  price: 11.0,
  category: 'Painkillers',
  stockStatus: 'IN STOCK',
  image:
    'https://i-cf65.ch-static.com/content/dam/global/panadol/en_LK/760x820/418x418Panadol.png?auto=format',
  quantity: 120,
};
