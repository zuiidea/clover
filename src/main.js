import Vue from 'vue'
import Router from 'vue-router'
// import VueTouch from 'vue-touche'
// import Device from './libs/device'
import Clover from './clover'
import FastClick from 'fastclick'
import Home from './Home'
import Index from './Index'
import Demo from './demos/Demo'
import Btn from './demos/Btn'
import Icon from './demos/Icon'
import Navbar from './demos/Navbar'
import Grid from './demos/Grid'
import List from './demos/List'
import Badge from './demos/Badge'
import Rater from './demos/Rater'

Vue.use(Router)
Vue.use(Clover)
var App = Vue.extend({})
var router = new Router()
// var device = Device()

router.map({
  '/': {
    component: function (resolve) {
      resolve(Demo)
      // if (device.pc) {
      //   resolve(Index)
      // } else {
      //   resolve(Demo)
      // }
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
  },
  '/component/rater': {
    component: Rater
  }
})

router.start(App, '#app')

Clover.router(router)

FastClick.attach(document.body)
