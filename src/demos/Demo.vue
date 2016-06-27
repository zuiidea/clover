<template>
    <div class="content-block-title">
      Basic
    </div>
    <div class="list-block">
      <ul>
        <li>
          <a v-link="{ path: '/component/button' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media bg-cyan">
                <Icon type="star"></Icon>
              </div>
              <div class="item-inner">
                <div class="item-title">按钮 Button</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a v-link="{ path: '/component/icon' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media bg-yellow">
                <Icon type="love"></Icon>
              </div>
              <div class="item-inner">
                <div class="item-title">图标 Icon</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item-link">
            <div class="item-content">
              <div class="item-media icon-media">
                <Icon type="send"></Icon>
              </div>
              <div class="item-inner">
                <div class="item-title">布局 Layout</div>
                <div class="item-after">
                  敬请期待
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="content-block-title">
        Form Control <span style="font-size:12px;margin-left:16px;">开发中...</span>
      </div>
      <div class="list-block not-open">
        <ul>
          <li>
            <a  class="item-link">
              <div class="item-content">
                <div class="item-media icon-media bg-cyan">
                  <Icon type="star"></Icon>
                </div>
                <div class="item-inner">
                  <div class="item-title">上传 Upload</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a  class="item-link">
              <div class="item-content">
                <div class="item-media icon-media bg-blue">
                  <Icon type="love"></Icon>
                </div>
                <div class="item-inner">
                  <div class="item-title">开关 Switch</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link">
              <div class="item-content">
                <div class="item-media icon-media bg-yellow">
                  <Icon type="send"></Icon>
                </div>
                <div class="item-inner">
                  <div class="item-title">输入框 Input</div>
                  <div class="item-after">

                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link">
              <div class="item-content">
                <div class="item-media icon-media bg-cyan">
                  <Icon type="send"></Icon>
                </div>
                <div class="item-inner">
                  <div class="item-title">范围 Range</div>
                  <div class="item-after">

                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-link">
              <div class="item-content">
                <div class="item-media icon-media bg-blue">
                  <Icon type="send"></Icon>
                </div>
                <div class="item-inner">
                  <div class="item-title">单选框 Radio</div>
                  <div class="item-after">

                  </div>
                </div>
              </div>
            </a>
          </li>

        </ul>
    </div>
</template>

<script>
import { Icon } from '../components'
export default {
  components: {
    Icon
  }
}
</script>

<style scoped lang="less">
  @import "../styles/core/vars";
  .item-media{
    &.icon-media{
      color: #fff;
      min-width: 21px;
      height:21px;
      border-radius: 50%;
      background-color: @gray;
    }
    .icon{
      margin:0 auto;
    }
    &.bg-cyan{
      background-color: @cyan;
    }
    &.bg-yellow{
      background-color: @yellow;
    }
    &.bg-blue{
      background-color: @blue;
    }
  }
  .not-open{
    -webkit-filter: blur(1px);
    filter: blur(1px);
   }
</style>
