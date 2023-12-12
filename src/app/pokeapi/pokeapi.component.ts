import { Component, OnInit } from '@angular/core';
import { PokeService, Pokemon } from './pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
  pokemons: Pokemon[] = [];
  searchTerm: string = '';
  selectedOption: string = 'ALL...';

  p: number = 1;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeService.getPokemons().subscribe(
      (pokemonsWithDetails: Pokemon[]) => {
        this.pokemons = pokemonsWithDetails;
        this.filterPokemons(); // Chame a função de filtro aqui após carregar os Pokémons
      },
      (error: any) => {
        console.log('Erro ao obter Pokémons:', error);
      }
    );
  }

  filterPokemons() {
    this.pokeService.filterPokemons(this.searchTerm, this.selectedOption).subscribe(
      (filteredPokemons: Pokemon[]) => {
        this.pokemons = filteredPokemons;
        console.log("Teste",this.pokemons);
      },
      (error: any) => {
        console.log('Erro ao filtrar Pokémons:', error);
      }
    );
  }
}
