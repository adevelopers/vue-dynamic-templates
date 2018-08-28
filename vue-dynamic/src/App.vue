<template>
  <div id="app">
    <TableCommon template-name="big" />
    <TableCommon template-name="main" />
    <TableCommon template-name="small" />
  </div>
</template>

<script>
import TableCommon from './components/TableCommon.vue'

export default {
  name: 'app',
  components: {
    TableCommon
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
</style>
