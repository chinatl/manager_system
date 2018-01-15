import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/login'
        },
		{
			path: '/readme',
			meta: {
				requireAuth: true
			},
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [
				{
					path: '/JYPX1_01',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_01.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_02',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_02.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_03',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_03.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_04',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_04.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_05',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_05.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_06',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_06.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_07',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_07.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_08',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_08.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX1_09',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX1_09.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX2_01',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX2_01.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX2_02',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX2_02.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX2_03',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX2_03.vue'], resolve) // 测试列表组件
                },{
					path: '/JYPX3',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/JYPX3.vue'], resolve) // 测试列表组件
                },{
					path: '/none1',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/Test.vue'], resolve) // 测试列表组件
                },{
					path: '/none2',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/Test.vue'], resolve) // 测试列表组件
                },{
					path: '/none3',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/Test.vue'], resolve) // 测试列表组件
                },{
					path: '/none4',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/Test.vue'], resolve) // 测试列表组件
                },{
					path: '/test',
					meta: {
						requireAuth: true
					},
					component: resolve => require(['../components/page/Test.vue'], resolve) // 测试列表组件
                },
            ]
        },
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
