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
          <icon type="my">
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
          <icon type="my">
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png" circle>
        </div>
      <div class="item-title">
        移动网络
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png" circle>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png" circle>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png" circle>
        </div>
      <div class="item-title">
        其他连接方式
      </div>
      </list-item>
    </list>
    <div class="content-block-title">
       无图标 no icon
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
    <div class="content-block-title">
      中图标 middle icon
    </div>
    <list media>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="35">
        </div>
        <div class="item-title">
          微信
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png" radius size="35">
        </div>
        <div class="item-title">
          QQ
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="35">
        </div>
        <div class="item-title">
          微博
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="35">
        </div>
        <div class="item-title">
          音乐
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
    </list>
    <div class="content-block-title">
      大图标 big icon
    </div>
    <list media>
      <list-item>
        <icon slot="media" link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="61"></icon>
        <div class="item-title-row">
          <div class="item-title">
            微信
          </div>
        </div>
        <div class="item-text">
         <rater :value="3">
        </div>
        <div class="item-text">
         社交聊天
        </div>
        <btn slot="extra" small color="green">下载</btn>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png" radius size="35">
        </div>
        <div class="item-title">
          QQ
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="35">
        </div>
        <div class="item-title">
          微博
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="35">
        </div>
        <div class="item-title">
          音乐
        </div>
        <div class="item-title-row">
            <div class="item-text">
             一个进程和2个服务
            </div>
            <div class="item-after">
             20MB 11:01:38
            </div>
        </div>
      </list-item>
    </list>
  </Page>
</template>

<script>
import { List, ListItem, Btn, Icon, Badge, Page, Navbar, Rater } from '../components'

export default {
  components: {
    List,
    ListItem,
    Btn,
    Icon,
    Badge,
    Page,
    Navbar,
    Rater
  }
}
</script>

<style scoped lang="less">

</style>
