<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data(){
      let message = "Hello world"
      return { message }
    },
  })
</script>

<template>
  <div>
    <h1 className="text-3xl font-bold underline">{{ message }}</h1>
  </div>
</template>

<style scoped>

</style>
