// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 注意样式文件需要单独引入
// 控制路由表的js文件
import '@/permission.js'
import '@/utils/global'//全局路由
import axios from 'axios' // 引入axios替换ajax
Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://localhost:5478'
// 调用插件
Vue.use(ElementUI);
Vue.config.productionTip = false
//开发环境下才会引入mockjs
process.env.MOCK && require('@/mock')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
