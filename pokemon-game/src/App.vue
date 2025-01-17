<script lang="ts">
  import { defineComponent } from 'vue';
  import PokemonGame from './views/PokemonGame.vue';

  export default defineComponent({
    data() {
        let message = "Hello world";
        return { message };
    },
    components: { PokemonGame }
})
</script>

<template>
  <div>
    <PokemonGame/>
  </div>
</template>

<style scoped></style>
