import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Array<any>; 

  constructor() { 
    this.products= [
      {id: 1, name: "Computer", price: 6500 },
      {id: 2, name: "Imprimente", price: 1500 },
      {id: 3, name: "Smart Phone", price: 500 }
    ];
  }

  public getAllProducts() : Observable<Array<any>>{
   return of(this.products);
  }
}
