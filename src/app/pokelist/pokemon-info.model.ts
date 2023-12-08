// pokemon-info.model.ts
export interface PokemonInfo {
    name: string;
    id: number;
    // Outras propriedades do Pokémon, se houver
  }

export interface PokemonDetails {
types: { type: { name: string } }[];
// Outras propriedades do Pokémon, se houver
}