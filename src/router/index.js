import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

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
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/a',
      name: 'a',
      component: Test
    }
  ]
})
