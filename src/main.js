import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'

var App = Vue.extend({})
Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  }
})

router.start(App, '#app')
