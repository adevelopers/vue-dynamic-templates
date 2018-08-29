<template>
  <span><input type="text" placeholder="31337" v-bind:name="fieldName" v-model="value" v-on:input="onEdit" v-on:change="onEdit"  /></span>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    fieldName: String
  },
  data: function() {
    return {
      value: ''
    }
  },
  methods: {
    onEdit() {
      console.log(this.value);
    }
  }
}
</script>
