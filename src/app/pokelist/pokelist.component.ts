// pokelist.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];

  ngOnInit(): void {
    // Se você precisar fazer alguma lógica de inicialização, você pode fazer aqui
  }

  formatName(inputName: string): string {
    const parts = inputName.split("-");

    if (parts.length > 1) {
      const formattedParts = parts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      );
      return formattedParts.join(" ");
    } else {
      return inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
    }
  }
}
