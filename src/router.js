// 导入 vue-renter 包
import VueRouter from 'vue-router';

// 导入 Account 组件
import account from './main/account.vue';
// 导入 Goodslist 组件
import goodslist from './main/goodslist.vue';

// 导入 Account 的 子 组件
import login from './subcom/login.vue';
import register from './subcom/register.vue';

// 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account', 
            component: account,
            children: [
                {path: '/login', component: login},
                {path: '/register', component: register}
            ]
        },
        {path: '/goodslist', component: goodslist}
    ],
});


// 把路由对象暴露出去
export default router;