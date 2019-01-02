import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [{
        path: '/',
        name: 'local',
        component: () => import('../components/main.vue')
      }, {
        path: '/content/:id',
        name: 'content',
        component: () => import('../components/content.vue')
      }]
    }
  ]
})
