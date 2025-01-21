<script lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { defineComponent } from 'vue';

    export default defineComponent({
    name: '',
    setup(props, { emit, attrs, expose, slots }) {
        return {};
    },
    components: { PokemonPicture, PokemonOptions }
});
</script>

<template>
    <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>
    </section>

    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿Quien es este pokemon?</h1>
        <PokemonPicture/>
        <PokemonOptions/>
    </section>
    
</template>

<style scoped></style>
