import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from './product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getProductList(): Observable<ProductCategory[]>{
    return this.httpClient.get<ProductCategory[]>(`${this.baseURL}`);
  }

  createEmployee(product: ProductCategory): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id: number): Observable<ProductCategory>{
    return this.httpClient.get<ProductCategory>(`${this.baseURL}/${id}`);
  }

  // updateEmployee(id: number, employee: Productcategory): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }

  // deleteEmployee(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

}
