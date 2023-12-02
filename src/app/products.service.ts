import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }
}

// products.service.ts
export interface Product {
    id: number;
    title: string; // Altere de 'name' para 'title'
    description: string;
    price: number;
    // Adicione outras propriedades conforme necessário
  }
  
