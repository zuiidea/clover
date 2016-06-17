<style scoped lang="less">
  @import './styles/normalize.css';
  @import './styles/home.less';
</style>

<template>

  <div class="home">
    <div class="box">
      <div class="logo animated fadeInUp">
      </div>
      <div class="clover animated fadeInUp delay-1">
      </div>
      <div class="slogan animated fadeInUp delay-2">
      </div>
    </div>
    <div class="footer">
      <p>
        <span>版本：0.1</span>
      </p>
      <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=zuiidea&repo=clover&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
    </div>
  </div>

</template>

<script>
  const version = require('../package.json').version
  export default {
    data () {
      return {
        version: version
      }
    }
  }
</script>
