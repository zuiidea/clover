import Vue from 'vue'
import Router from 'vue-router'
import Device from './libs/device'
import Home from './Home'
import Index from './Index'
import Demo from './demos/Demo'
import Btn from './demos/Btn'
import Icon from './demos/Icon'
import Navbar from './demos/Navbar'
import Grid from './demos/Grid'
import List from './demos/List'
import Badge from './demos/Badge'

Vue.use(Router)
var App = Vue.extend({})
var router = new Router()
var device = Device()

router.map({
  '/': {
    component: function (resolve) {
      if (device.pc) {
        resolve(Index)
      } else {
        resolve(Demo)
      }
    }
  },
  '/home': {
    component: Home
  },
  '/demo': {
    component: Demo
  },
  '/index': {
    component: Index
  },
  '/component/btn': {
    component: Btn
  },
  '/component/navbar': {
    component: Navbar
  },
  '/component/icon': {
    component: Icon
  },
  '/component/grid': {
    component: Grid
  },
  '/component/list': {
    component: List
  },
  '/component/badge': {
    component: Badge
  }
})

router.start(App, '#app')
