import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Walk the Dog", "Cut the Grass", "Paint the Fence"],
      newItem: ""
    },
    methods: {
      saveItem: function (item) {
        this.items.push(item);
        this.newItem = "";
      }

    }
  });
});
