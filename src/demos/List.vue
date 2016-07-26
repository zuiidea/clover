<template>
  <Page>
    <Navbar type="secondary" slot="navbar">
        列表 list
    </Navbar>
    <div class="content-block-title">
      默认 Default
    </div>
    <list>
      <list-item>
        <div slot="media">
          <icon type="my" small></icon>
        </div>
      <div class="item-title">
        Ivan Petrov
      </div>
      <div class="item-after">
       <badge bg-color="blue">New</badge>
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon type="my" small></icon>
        </div>
      <div class="item-title">
        Ivan Petrov
      </div>
      <div class="item-after">
       CEO
      </div>
      </list-item>
    </list>
    <div class="content-block-title">
      图标 Icon
    </div>
    <list>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png" small></icon>
        </div>
      <div class="item-title">
        移动网络
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png" small></icon>
        </div>
      <div class="item-title">
        WLAN
      </div>
      <div class="item-after">
      XIAOMI-wifi
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png" small></icon>
        </div>
      <div class="item-title">
        蓝牙
      </div>
      <div class="item-after">
       已开启
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png" small></icon>
        </div>
      <div class="item-title">
        其他连接方式
      </div>
      </list-item>
    </list>
    <div class="content-block-title">
       无图标 no icons
    </div>
    <list>
      <list-item link>
      <div class="item-title">
        蓝牙
      </div>
      </list-item>
      <list-item link>
      <div class="item-title">
        其他连接方式
      </div>
      </list-item>
    </list>
  </Page>
</template>

<script>
import { List, ListItem, Btn, Icon, Badge, Page, Navbar } from '../components'

export default {
  components: {
    List,
    ListItem,
    Btn,
    Icon,
    Badge,
    Page,
    Navbar
  }
}
</script>

<style scoped lang="less">

</style>
