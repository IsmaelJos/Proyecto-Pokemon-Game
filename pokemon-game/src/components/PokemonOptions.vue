<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '',
    setup(props, { emit, attrs, expose, slots }) {
        return {};
    }
});
</script>

<template>
    <section class="mt-5">
        <ol>
            <li>Pokémon 1</li>
            <li>Pokémon 2</li>
            <li>Pokémon 3</li>
            <li>Pokémon 4</li>
        </ol>
    </section>
</template>

<style scoped >

li {
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
  }

</style>
