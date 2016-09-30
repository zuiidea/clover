<template>
<div class="page">
  <Navbar type="secondary" slot="navbar">
    图标
  </Navbar>
  <Content>
    <div class="content-block">
      <div class="row">
        <div class="col-20">
          <icon type="up"></icon>
        </div>
        <div class="col-20">
          <icon type="down"></icon>
        </div>
        <div class="col-20">
          <icon type="right"></icon>
        </div>
        <div class="col-20">
          <icon type="left"></icon>
        </div>
        <div class="col-20">
          <icon type="wifi"></icon>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <icon type="notice"></icon>
        </div>
        <div class="col-20">
          <icon type="search"></icon>
        </div>
        <div class="col-20">
          <icon type="reload"></icon>
        </div>
        <div class="col-20">
          <icon type="document"></icon>
        </div>
        <div class="col-20">
          <icon type="file"></icon>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <icon type="star"></icon>
        </div>
        <div class="col-20">
          <icon type="voice"></icon>
        </div>
        <div class="col-20">
          <icon type="sound"></icon>
        </div>
        <div class="col-20">
          <icon type="unsound"></icon>
        </div>
        <div class="col-20">
          <icon type="share"></icon>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <icon type="reply"></icon>
        </div>
        <div class="col-20">
          <icon type="location"></icon>
        </div>
        <div class="col-20">
          <icon type="send"></icon>
        </div>
        <div class="col-20">
          <icon type="check"></icon>
        </div>
        <div class="col-20">
          <icon type="wifi"></icon>
        </div>
      </div>
    </div>
  </Content>
</div>
</template>

<script>
import { Icon, Navbar, Content } from '../components'
export default {
  components: {
    Icon,
    Navbar,
    Content
  }
}
</script>

<style scoped lang="less">
  .col-20{
    text-align: center;
  }
  .row{
    margin-bottom:32px;
  }
</style>
