<template>
  <div id="app">
    {{ titulo }}
  <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        titulo: 'Teste Data usando Vue JS'
      }
    }
  }
</script>

<style>
#app {
  background-color: chocolate;
  color: white;
}

</style>