<script lang="ts">
  import { defineComponent } from 'vue';
  import PokemonGame from './views/PokemonGame.vue';
import PokemonPicture from './components/PokemonPicture.vue';
import PokemonOptions from './components/PokemonOptions.vue';

  export default defineComponent({
    components: { PokemonGame, PokemonPicture, PokemonOptions }
  })
</script>

<template>
  <div>
      <PokemonGame/>
  </div>
</template>

<style scoped></style>
