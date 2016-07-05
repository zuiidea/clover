<template>
  <div class="main">
     <div class="mobile">
         <div class="mobile-inner">
            <iframe src="/" frameborder="0"></iframe>
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

<style scoped lang="less">
  @import './styles/normalize.css';
  @import './styles/index.less';
</style>
