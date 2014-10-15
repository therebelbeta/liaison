var Vue = require('vue');

var vm = new Vue({
  el: '[v-app]',
  data: {
    a: 1
  },
  methods: {
    plus: function() {
      this.a++
    }
  }
})

module.exports = vm;
