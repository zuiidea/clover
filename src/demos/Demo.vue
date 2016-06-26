<template>
  <div class="content-block">
    <div class="content-block-title">
      UI 元素
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
              <div class="item-media icon-media bg-orange">
                <Icon type="love"></Icon>
              </div>
              <div class="item-inner">
                <div class="item-title">图标 Icon</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
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
      min-width: 32px;
      border-radius: 50%;
    }
    .icon{
      margin:0 auto;
    }
    &.bg-green{
      background: @green;
    }
    &.bg-cyan{
      background: @cyan;
    }
    &.bg-orange{
      background: @orange;
    }
  }

</style>
