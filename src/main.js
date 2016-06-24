import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'

import Demo from './demos/Demo'
import Button from './demos/Button'

var App = Vue.extend({})
Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/demo': {
    component: Demo
  },
  '/component/button': {
    component: Button
  }
})

router.start(App, '#app')
