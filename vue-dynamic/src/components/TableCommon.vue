<template>
  <div class="hello">
    <h1>{{ templateName }}</h1>
    <table class="" border="2">
      <tr>
        <td><Cell field-name="first" /> </td>
        <td><Cell field-name="first2" /></td>
        <td><Cell field-name="first3" /></td>
        <td><Cell field-name="first4" /></td>
      </tr>
      <tr>
        <td><Cell field-name="second" /></td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
  name: 'TableCommon',
  props: {
    templateName: String
  },
  components: {
    Cell
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
