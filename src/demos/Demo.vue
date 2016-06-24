<template>
  <div class="button">
    <a v-link="{ path: '/component/button' }">Button</a>
    <a v-link="{ path: '/home' }">Home</a>
  </div>
</template>

<script>
  export default {
    data () {
    }
  }
</script>

<style scoped lang="less">
 .button{
  //  background-color: #666;
 }
</style>
