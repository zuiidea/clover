<style scoped lang="less">
@import './styles/normalize.css';
@import './styles/home.less';
</style>

<template>
<div class="home">
    <div class="box">
        <div class="logo animated fade-in-bottom delay-1">
        </div>
        <div class="clover animated fade-in-bottom delay-2">
        </div>
        <div class="slogan animated fade-in-bottom delay-3">
        </div>
    </div>
</div>
</template>

<script>
import Device from './libs/device.js'
const version = require('../package.json').version
Device()
export default {
  data () {
    return {
      version: version
    }
  }
}
</script>
