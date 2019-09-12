import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Firebase from "./firebase"

// -- hand --
Firebase.init();
// vue-router と routes.js をインポート
import VueRouter from 'vue-router'
import {
  routes
} from './routes'

// VueRouterをプラグインとして指定
Vue.use(VueRouter)

// VueRouterインスタンスを作成
const router = new VueRouter({
  routes
})
// -- hand --

Vue.config.productionTip = false

new Vue({
  store,
  router, // hand
  render: h => h(App)
}).$mount('#app')
