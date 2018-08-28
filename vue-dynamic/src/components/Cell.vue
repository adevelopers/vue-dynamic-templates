<template>
  <span><input type="text" placeholder="31337" v-bind:name="fieldName" /></span>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    fieldName: String
  }
}
</script>
