export type PokemonList = {
  results: PokemonListData[];
};

export interface PokemonListData {
  name: string;
  url: string;
}
