import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './plugins/vant.js'
import "amfe-flexible";
import "less";
import "less-loader";
import { Lazyload } from "vant";
import './assets/style/resetcss.css'
import axios from 'axios'
import api from "./request/api/index.js"

Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(Lazyload);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
