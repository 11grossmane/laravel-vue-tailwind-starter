require("./bootstrap");

window.Vue = require("vue").default;

window.Vue.component("app-component", require("./components/App.vue").default);

new Vue({
    el: "#app"
});
