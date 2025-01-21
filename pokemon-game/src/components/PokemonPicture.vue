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
    <section>
        <img class="h-[200px] brightness-0" src="../assets/dito.png"/>
    </section>
    
</template>

<style scoped >
img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
</style>
