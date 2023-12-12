import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=493';
  private pokeSubject = new BehaviorSubject<Pokemon[]>([]);
  pokemons$: Observable<Pokemon[]> = this.pokeSubject.asObservable();

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
        this.pokeSubject.next(pokemonDetails);
        return pokemonDetails;
      })
    );
  }

  filterPokemons(searchTerm: string, selectedOption: string): Observable<Pokemon[]> {
    return this.pokemons$.pipe(
      map((pokemons) => {
        return pokemons.filter((pokemon) => {
          const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
          const typeMatch =
            selectedOption === 'ALL...' || pokemon.types.some((type) => type.type.name === selectedOption.toLowerCase());

          return nameMatch && typeMatch;
        });
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
  types: {
    name: string;
    slot: number;
    type: { name: string; url: string };
  }[];
  typeDetails?: { name: string; url: string }[];
  sprites: {
    front_default: string;
  };
  // Adicione outras propriedades conforme necessário
}
