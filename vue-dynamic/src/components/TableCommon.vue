<script>
import Vue from 'vue/dist/vue.esm.js'
import axios from 'axios'
import VueResource from 'vue-resource'
import Cell from './Cell.vue'
Vue.use(VueResource);

export default {
  name: 'TableCommon',
  props: {
    templateName: String
  },
  data: function() {
    return {
      template: null,
      staticTemplate: null,
      compiled: null,
    }
  },
  render: function(createElement) {
    if (!this.compiled) {
      return createElement('div', 'Loading...');
    } else {
      console.log(this.compiled.render)
      if (this.compiled.render.call !== null) {
          this.template = this.compiled.render;
          return this.template();
      } else {
        return createElement('div', 'Errors...');
      }
    }
  },
  staticRenderFns: function(){
    if (this.compiled !== null) {
        return this.compiled.staticRenderFns;
    }
    return null
  },
  mounted() {
    let self = this;
    let templateUrl = '/templates/' + this.templateName + '.html';
    this.$http.get(templateUrl).then(response => {
          let compiled = Vue.compile(response.data);
          if (compiled !== null) {
            self.compiled = compiled
          }
    }, response => {

    });
    // axios.get(templateUrl)
    //   .then(function (response) {
    //     self.template =  Vue.compile("" + response.data).render;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function (x) {
    //     console.log("Хрень какая-то", x)
    //
    //   });
  },
  components: {
    Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  background-color: #e5e5e5;
  span {
    font-weight: bold;

  }
}
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
