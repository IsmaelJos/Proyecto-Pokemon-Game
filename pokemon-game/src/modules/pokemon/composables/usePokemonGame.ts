import { computed, onMounted, ref } from 'vue';
import { pokemonApi } from '../api/pokemonApi';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';

export const usePokemonGame = () => {
    
    
    const gameStatus = ref<GameStatus>( GameStatus.Playing);
    const pokemons = ref<Pokemon[]>([]);

    const isLoading = computed(()=> pokemons.value.length === 0);

    const getPokemons = async (): Promise<Pokemon[]> => {
        
        const pokemonApi0 = new pokemonApi()

        const response = await pokemonApi0.get('/?limit=151');

        const pokemonsArray = response.results.map(pokemon => {
            const urlParts = pokemon.url.split('/');
            const id = urlParts[urlParts.length - 2] ?? 0;

            return{
                name: pokemon.name,
                id: +id,
            }
        })

        const pokemonsUnsorted = pokemonsArray.sort(() => Math.random() - 0.5)

        return pokemonsUnsorted;
        //return pokemonsArray;
        
    };
    
    onMounted(() =>{
        const pokemons = getPokemons();
        console.log({pokemons});
        setTimeout(() => isLoading = false, 1000);

    });

    return{
        gameStatus,
        isLoading,
    }
}