<script lang="ts">
  import { defineComponent } from 'vue';
  import PokemonGame from './views/PokemonGame.vue';
import PokemonPicture from './components/PokemonPicture.vue';

  export default defineComponent({
    data() {
        let message = "Hello world";
        return { message };
    },
    components: { PokemonGame, PokemonPicture }
})
</script>

<template>
  <div>
    <PokemonGame/>
    <PokemonPicture/>
  </div>
</template>

<style scoped></style>
