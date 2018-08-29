<template>
  <div id="app">
    <Journal />
  </div>
</template>

<script>
import Journal from './components/Journal'

export default {
  name: 'app',
  components: {
    Journal
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.table {
  padding: 20px;
  border: 1px dotted #e5e5e5;
  margin-bottom: 20px;
}

</style>
