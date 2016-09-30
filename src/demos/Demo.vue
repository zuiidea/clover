<template>
 <div class="page">
  <Content>
    <div class="content-block-title">
      Basic
    </div>
    <div class="list-block">
      <ul>
        <li>
          <a v-link="{ path: '/component/btn' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media bg-cyan">
                <icon type="star"></icon>
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
                <icon type="file"></icon>
              </div>
              <div class="item-inner">
                <div class="item-title">图标 Icon</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a  v-link="{ path: '/component/grid' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media  bg-blue">
                <icon type="voice"></icon>
              </div>
              <div class="item-inner">
                <div class="item-title">网格 Grid</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a  v-link="{ path: '/component/list' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media">
                <icon type="sound"></icon>
              </div>
              <div class="item-inner">
                <div class="item-title">列表 List</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="content-block-title">
        Content
      </div>
      <ul>
        <li>
          <a v-link="{ path: '/component/navbar' }" class="item-link">
            <div class="item-content">
              <div class="item-media icon-media bg-cyan">
                <icon type="comment"></icon>
              </div>
              <div class="item-inner">
                <div class="item-title">顶部 Navbar</div>
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
                  <icon type="reply"></icon>
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
                  <icon type="document"></icon>
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
                  <icon type="send"></icon>
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
                  <icon type="send"></icon>
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
                  <icon type="send"></icon>
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
  </Content>
 </div>
</template>

<script>
import { Icon, Content } from '../components'
export default {
  components: {
    Icon,
    Content
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
      font-size: 12px;
      line-height: 21px;
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
