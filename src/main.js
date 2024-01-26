import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入elementUI插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入jquery
import $ from 'jquery'
Vue.prototype.$jq = $;

import store from './store'

Vue.config.productionTip = false
// 导入插件
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
