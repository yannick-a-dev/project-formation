import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi: string = environment.serverUrl


  constructor(private http: HttpClient) { }

  /*getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.products.length) {
        resolve(this.products)
      } else {
        reject([])
      }
    })
  }*/
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi)
  }

  getNumber(): Observable<Number>{
    return of(45)
  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product) { }

  editProduct(id: string, product: Product) { }

  deleteProduct(id: string) { }
}
