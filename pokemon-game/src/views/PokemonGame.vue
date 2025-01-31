<script setup lang="ts">
import PokemonPicture from '@/components/PokemonPicture.vue';
import { usePokemonGame } from '../modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';
import PokemonOptions from '@/components/PokemonOptions.vue';

  const {gameStatus, isLoading, randomPokemon, pokemonOptions} = usePokemonGame();

</script>

<template>
    <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>
    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿Quien es este pokemon?</h1>
        <h3>{{ randomPokemon }}</h3>
        <PokemonPicture 
        :pokemon-id="randomPokemon.id" 
        :show-pokemon="gameStatus !== GameStatus.Playing"/>
        <PokemonOptions :options="pokemonOptions"/>
    </section>
</template>

<style scoped></style>
