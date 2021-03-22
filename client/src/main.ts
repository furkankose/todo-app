import Vue from 'vue';
import App from './App.vue';
import Snotify from 'vue-snotify';

import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-snotify/styles/material.css';

Vue.use(Snotify);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
