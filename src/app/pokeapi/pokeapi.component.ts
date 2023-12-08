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

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(
      (pokemonsWithDetails: Pokemon[]) => {
        this.pokemons = pokemonsWithDetails;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
