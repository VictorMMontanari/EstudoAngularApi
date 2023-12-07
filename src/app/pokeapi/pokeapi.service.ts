import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  private pokeSubject = new BehaviorSubject<PokemonInfo[]>([]);
  pokemons$: Observable<PokemonInfo[]> = this.pokeSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonInfo[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching Pokemons:', error);
        return throwError(error);
      }),
      map((response) => response.results)
    );
  }
}

export interface PokemonInfo {
  name: string;
  url: string;
}
