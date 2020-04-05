// 导入 Vue 包
import Vue from 'vue';

// 导入 vue-renter 包
import VueRouter from 'vue-router';


// 手动安装 VueRouter
Vue.use(VueRouter);


// 导入 App 组件
import app from './App.vue';


// 导入 router 路由
import router from './router.js';



var vm = new Vue({
    el: '#app',
    data: {
        msg: '这是一段话'
    },
    methods: {},
    render: c => c(app),
    router
})
