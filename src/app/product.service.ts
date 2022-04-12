import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8083/api/v1/products';

  getProductsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product : Product):Observable<any>{
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id:number,value : any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteProduct1(id:number):Observable<any>{
    return this.http.delete('http://localhost:8083/api/v1/products/'+id)
  }

}
