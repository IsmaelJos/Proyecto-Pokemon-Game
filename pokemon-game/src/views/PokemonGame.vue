<template>
    <section class="flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>
    </section>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '',
    setup(props, { emit, attrs, expose, slots }) {
        return {};
    }
});
</script>

<style scoped lang="scss"></style>
