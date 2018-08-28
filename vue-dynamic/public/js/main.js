Vue.config.devtools = true

Vue.component('cell', {
  props: {
    name: String
  },
  template: '<span><input type="text" v-bind:name="name" /></span>'
})

var tableCommon = Vue.component('table-common', {
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
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  mounted() {
    console.log("mounted");
    // Make a request for a user with a given ID

  }

})
