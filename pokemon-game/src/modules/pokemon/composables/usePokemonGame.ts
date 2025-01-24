import { onMounted, ref } from 'vue';
import { pokemonApi } from '../api/pokemonApi';
import { GameStatus, type PokemonListResponse } from '../interfaces';

export const usePokemonGame = () => {
    
    
    const gameStatus = ref<GameStatus>( GameStatus.Playing);

    const getPokemons = async () => {
        
        const pokemonApi1 = new pokemonApi()
        const response = await pokemonApi1.get('/?limit=151');
        console.log(response);
    };
    onMounted(() =>{
        getPokemons();
    });
    return{
        gameStatus,
    }
}