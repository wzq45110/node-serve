import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '@/components/HelloWorld'
export default new Router({
    routes: [{
        path: '/', //到时候地址栏会显示的路径
        name: 'Home',
        component: Home // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    }],
    mode: "history"
})