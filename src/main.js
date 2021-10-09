import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import scss
import "./assets/sass/main.scss";

import VueAxios from "vue-axios";
import axios from "./axios.js";
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
