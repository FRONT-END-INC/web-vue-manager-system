import Vue from 'vue'
import Router from 'vue-router'
// views
import Login from '@/views/Login'
import Home from '@/views/Home'

// components
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import BaseTable from '@/components/BaseTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/Hello',
          component: Hello
        },
        {
          path: '/a',
          component: Test
        },
        {
          path: '/',
          component: BaseTable
        }
      ]
    }
  ]
})
