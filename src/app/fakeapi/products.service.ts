import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private produtosSubject = new BehaviorSubject<Product[]>([]);
  produtos$: Observable<Product[]> = this.produtosSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError(error);
      }),
      map((produtos) => {
        this.produtosSubject.next(produtos);
        return produtos;
      })
    );
  }

  filterProducts(searchTerm: string, selectedOption: string): Observable<Product[]> {
    return this.produtos$.pipe(
      map((produtos) => {
        let filteredProdutos = [...produtos];
  
        if (searchTerm) {
          filteredProdutos = filteredProdutos.filter((produto) => produto.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
  
        if (selectedOption.toLowerCase() === 'maior') {
          filteredProdutos.sort((a, b) => b.price - a.price);
        } else if (selectedOption.toLowerCase() === 'menor') {
          filteredProdutos.sort((a, b) => a.price - b.price);
        }

        return filteredProdutos;
      }),
      catchError((error) => {
        console.error('Error filtering products:', error);
        return throwError(error);
      })
    );
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  // Adicione outras propriedades conforme necessário
}
