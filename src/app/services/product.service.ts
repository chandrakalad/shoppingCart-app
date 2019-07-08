import { Injectable } from '@angular/core';
import { product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: product[];

  constructor() { 
    this.products = [
      { id: 'p01', name: 'chandu', price: 100, photo: 'thumb1.jpeg' },
      { id: 'p02', name: 'venkat', price: 200, photo: 'thumb2.jpeg' },
      { id: 'p03', name: 'jassu', price: 300, photo: 'thumb4.jpeg' },
      { id: 'p04', name: 'sai', price: 400, photo: 'thumb1.jpeg' },
      { id: 'p05', name: 'chari', price: 500, photo: 'thumb2.jpeg' }
    ]
  }

findAll(): product[]{
 return this.products;
}

find(id: string): product {
  return this.products[this.getSelectedIndex(id)];
}
private getSelectedIndex(id: string){
  for (var i = 0; i< this.products.length; i++){
    if(this.products[i].id == id) {
      return i;
    }
  }
  return -1;
}


}
