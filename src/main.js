import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueNoty from 'vuejs-noty'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Notifications from 'vue-notification'
 
 
Vue.use(Notifications)
Vue.config.productionTip = false
Vue.use(VueNoty, {
  progressBar: true,
  layout: 'bottomRight'
})

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem("access_token");
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
