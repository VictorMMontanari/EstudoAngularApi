import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=40';
  private pokeSubject = new BehaviorSubject<PokemonInfo[]>([]);
  pokemons$: Observable<PokemonInfo[]> = this.pokeSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar os Pokémons:', error);
        return throwError(error);
      }),
      map((response) => response.results),
      switchMap((pokemons: PokemonInfo[]) => {
        const requests = pokemons.map((pokemon) => this.http.get<Pokemon>(pokemon.url));
        return forkJoin(requests).pipe(
          catchError((error) => {
            console.error('Erro ao buscar os detalhes do Pokémon:', error);
            return throwError(error);
          })
        );
      }),
      map((pokemonDetails: Pokemon[]) => {
        return pokemonDetails.map((detail) => ({
          id: detail.id,
          name: detail.name,
          types: detail.types,
          typeDetails: detail.types.map((type) => ({
            name: type.type.name,
            url: type.type.url,
            // Adicione outras propriedades relacionadas aos tipos conforme necessário
          })),
          sprites: {
            front_default: detail.sprites.front_default,
          },
          url: `https://pokeapi.co/api/v2/pokemon/${detail.id}/`, // Adicione a propriedade url aqui
          // Adicione outras propriedades conforme necessário
        }));
      }),
      map((pokemonsWithDetails) => {
        this.pokeSubject.next(pokemonsWithDetails);
        return pokemonsWithDetails;
      })
    );
  }
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
  typeDetails?: { name: string; url: string }[];
  sprites: {
    front_default: string;
  };
  // Adicione outras propriedades conforme necessário
}
