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
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokemons</h3>
    </section>
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1>¿Quien es este pokemon?</h1>
        <!--    Pokemon Picture    -->
        <!--    Pokemon Options    -->
    </section>
</template>

<style scoped></style>
