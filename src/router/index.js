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
        path: '/contents',
        name: 'contents',
        component: () => import('../components/content.vue')
      }]
    }
  ]
})
