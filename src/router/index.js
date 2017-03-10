import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/Login'


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
      path:'/index',
      name:'index',
      component: Index,
      children:[
        {
          path: '/ss',
        },
      ]

  ]
})
