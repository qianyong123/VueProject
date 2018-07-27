// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./stylecss/main.scss";
import "./js/rem.js";
import router from "./router/index.js"

import Vue from 'vue'
import App from './App'
// mint-ui 无限滚动、提示
import { InfiniteScroll, Toast } from 'mint-ui';
//用Vue调用
Vue.use(InfiniteScroll);
Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
