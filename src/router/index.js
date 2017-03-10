import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/views/Login.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['@/views/Home.vue'], resolve),
      children: [
        {
          path: '/Hello',
          component: resolve => require(['@/components/Hello.vue'], resolve)
        },
        {
          path: '/a',
          component: resolve => require(['@/components/Test.vue'], resolve)
        },
        {
          path: '/baseTable',
          component: resolve => require(['@/components/BaseTable.vue'], resolve)
        }
      ]
    }
  ]
})
