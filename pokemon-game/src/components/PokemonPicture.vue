<template>
    <section>
        <img v-if="!showPokemon" :src="pokemonImage" class="brightness-0 h-[200px]"/>
        <img v-else :src="pokemonImage" class="h-[200px] fade-in" alt="pokemon image"/>
    </section>
    
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    pokemonId: number;
    showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(),{
    showPokemon: false
});

const pokemonImage = computed(
    () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`
)

</script>

<style scoped >
img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
</style>
