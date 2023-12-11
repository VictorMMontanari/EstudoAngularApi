// pokeapi.component.ts
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

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(
      (pokemonsWithDetails: Pokemon[]) => {
        this.pokemons = pokemonsWithDetails;
        console.log(this.pokemons)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
