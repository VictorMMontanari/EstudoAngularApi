import { Component, OnInit } from '@angular/core';
import { PokeService, PokemonInfo } from './pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
  pokemons: PokemonInfo[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(
      (pokemons: PokemonInfo[]) => {
        this.pokemons = pokemons;
        console.log(pokemons);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
