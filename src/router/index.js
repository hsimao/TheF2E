import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Admin,
      children: [{
          name: 'admin',
          path: '/admin',
          component: Admin,
      }]
    }
  ]
})
