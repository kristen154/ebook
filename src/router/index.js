import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/layout'
Vue.use(Router)
export const  constantRouterMap =[
  	{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
    {
      path: '/layout',
      name: 'Layout',
      hidden: true,
      component: Layout
    }
  ]
export default new Router({
	scrollBehavior:()=>({y:0}),
  	routes: constantRouterMap
})







