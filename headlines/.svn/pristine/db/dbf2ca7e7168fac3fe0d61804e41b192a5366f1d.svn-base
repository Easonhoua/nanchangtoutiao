import Vue from 'vue'
import App from './App'
import api from './api'
import util from "@/common/js/util.js"
import check from "@/common/js/checkRule.js"
import g_show_modal from '@/common/G_show_modal/g_show_modal.js'

// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false

Vue.prototype.$api =api;
//请求类
Vue.prototype.request = api;

//工具类
Vue.prototype.util = util;
Vue.use(g_show_modal)
//
Vue.prototype.$host = 'https://api.0791look.com/';
//效验器
Vue.prototype.checker = check;

App.mpType = 'app'

const app = new Vue({
	api,
    ...App
})
app.$mount()
