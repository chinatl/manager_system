import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

import Axios from 'axios';
Vue.prototype.$axios=Axios;
Vue.prototype.pathUrl='/api';

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    	if(localStorage.getItem('ms_token')){
    		next()
    	}else {
	        next({
	            path: '/login',
	            query: {
	                redirect: to.fullPath
	            } // 将跳转的路由path作为参数，登录成功后跳转到该路由
	   		})
    	}

    } else {
        next();
    }
})
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');