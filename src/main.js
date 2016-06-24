import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Demo from './demos/Demo'
import Button from './demos/Button'

Vue.use(Router)
var App = Vue.extend({})
var router = new Router()

router.map({
  '/': {
    component: Demo
  },
  '/home': {
    component: Home
  },
  '/component/button': {
    component: Button
  }
})

router.start(App, '#app')
