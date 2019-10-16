import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import Meui from 'we-vue';
import "we-vue/lib/style.css";
import axios from 'axios';
import store from './store/index.js';

Vue.config.productionTip = false
Vue.use(Meui);
Vue.prototype.axios = axios;
new Vue({
  Meui,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
