import Vue from 'vue'
import Router from 'vue-router'
import regexp from '@/components/regexp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: regexp
    }
  ]
})
