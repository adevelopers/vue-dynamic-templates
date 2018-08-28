<script>
import Vue from 'vue/dist/vue.esm.js'
import axios from 'axios'
import Cell from './Cell.vue'

export default {
  name: 'TableCommon',
  props: {
    templateName: String
  },
  data: function() {
    return {
      title: "Good component",
      omega: 9,
      template: null
    }
  },
  render: function(createElement) {
    if (!this.template) {
      return createElement('div', 'Loading...');
    } else {
      return this.template();
    }
  },
  mounted() {
    let self = this;
    let templateUrl = '/templates/' + this.templateName + '.html';
    console.log(templateUrl);
    axios.get(templateUrl)
      .then(function (response) {
        self.template =  Vue.compile("" + response.data).render;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

      });
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
