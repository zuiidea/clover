<template>
 <div class="page">
  <Navbar type="secondary" slot="navbar">
      列表 list
  </Navbar>
  <Content>
    <div class="content-block-title">
      默认 Default
    </div>
    <list>
      <list-item>
        <div slot="media">
          <icon type="star">
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
          <icon type="send">
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png" circle></icon>
        </div>
      <div class="item-title">
        移动网络
      </div>
      </list-item>
      <list-item link>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png" circle></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png" circle></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png" circle></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="35"></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png" radius size="35"></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="35"></icon>
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
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="35"></icon>
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
        <icon slot="media" link="http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png" radius size="52"></icon>
        <div class="item-title-row">
          <div class="item-title">
            微信
          </div>
        </div>
        <div class="item-text">
         <rater :value="4" small></rater><span>社交聊天</span><span class="split">|</span><span>46.9M</span><badge small style="margin-left:5px;">广告</badge>
        </div>
        <div class="item-text">
         奥莱购-品牌直销的线上奥莱
        </div>
        <btn slot="extra" small>打开</btn>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.taobao.taobao.png" radius size="52"></icon>
        </div>
        <div class="item-title-row">
          <div class="item-title">
            手机淘宝
          </div>
        </div>
        <div class="item-text">
         <rater :value="3" small></rater>
        </div>
        <div class="item-text">
         时尚购物 48.9M
        </div>
        <btn slot="extra" small color="green">安装</btn>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png" radius size="52"></icon>
        </div>
        <div class="item-title-row">
          <div class="item-title">
            微博
          </div>
        </div>
        <div class="item-text">
         <rater :value="5" small></rater>
        </div>
        <div class="item-text">
         社交聊天 52.1M
        </div>
        <btn slot="extra" small color="green">下载</btn>
      </list-item>
      <list-item>
        <div slot="media">
          <icon link="http://oa5auszt6.bkt.clouddn.com/com.android.music.png" radius size="52"></icon>
        </div>
        <div class="item-title-row">
          <div class="item-title">
            音乐
          </div>
        </div>
        <div class="item-text">
         <rater :value="5" small></rater>
        </div>
        <div class="item-text">
         影音视听 10.9M
        </div>
        <btn slot="extra" small>打开</btn>
      </list-item>
    </list>
  </Content>
 </div>
</template>

<script>
import { List, ListItem, Btn, Icon, Badge, Content, Navbar, Rater } from '../components'

export default {
  components: {
    List,
    ListItem,
    Btn,
    Icon,
    Badge,
    Content,
    Navbar,
    Rater
  }
}
</script>

<style scoped lang="less">
.split{
  margin: 0 2px;
}
</style>
