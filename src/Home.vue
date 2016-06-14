<template>
  <div class="home">
    <div class="box">
      <div class="logo fade-in-bottom delay-1">
      </div>
      <div class="clover fade-in-bottom delay-2">
      </div>
      <div class="slogan fade-in-bottom delay-3">
      </div>
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

<style scoped lang="less">
  @import './styles/normalize.css';
  @import './styles/home.less';
</style>
