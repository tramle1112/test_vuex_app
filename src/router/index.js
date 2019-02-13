import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
