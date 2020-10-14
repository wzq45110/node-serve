import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import { post, get } from './utils/htttp'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')