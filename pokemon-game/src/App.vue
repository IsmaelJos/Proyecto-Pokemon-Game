<script lang="ts">
  import { defineComponent } from 'vue';
  import PokemonGame from './views/PokemonGame.vue';
import PokemonPicture from './components/PokemonPicture.vue';
import PokemonOptions from './components/PokemonOptions.vue';

  export default defineComponent({
    data() {
        let message = "Hello world";
        return { message };
    },
    components: { PokemonGame, PokemonPicture, PokemonOptions }
})
</script>

<template>
  <div style="background-color: #f1f1f1;">
    <PokemonGame/>
    <section class="flex flex-col justify-center items-center w-screen h-screen">
      <PokemonPicture/>
      <PokemonOptions/>
    </section>
    
  </div>
</template>

<style scoped></style>
