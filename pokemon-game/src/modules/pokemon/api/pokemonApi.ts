import axios from "axios";
import type { PokemonListResponse } from "../interfaces";


export class pokemonApi {
  async get(limit:string) {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon'+limit);
      return response.data as PokemonListResponse;
  }
}
