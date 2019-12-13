import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${environment.API_BASE_URL}/api/products`, this.httpOptions)
      .pipe(map(result => result));
  }

  public getProductById(id: Number): Product {
    const product: Product = null;
    return { ...product };
  }

  public editProduct(product: Product): Observable<void> {
    return this.httpClient.put<void>(`${environment.API_BASE_URL}/api/products/${product.id}`, product,this.httpOptions);
  }

  public addProduct(product: Product): Observable<number> {
    return this.httpClient.post<number>(`${environment.API_BASE_URL}/api/products`, product, this.httpOptions).pipe(map(result => {
      return result
    }));
  }
}
