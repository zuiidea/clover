/* only for building vux.css */
import Style from '../styles/index.vue' // eslint-disable-line

import Btn from './btn'
import Icon from './icon'
import Navbar from './navbar'
import Page from './page'
import Row from './row'
import Column from './column'
import { List, ListItem } from './list/'

const vux = {
  Btn,
  Navbar,
  Icon,
  Page,
  Row,
  Column,
  List,
  ListItem
}

console.log(vux)

module.exports = vux
