<template>
 <div class="page">
  <div class="" :class="classes">
    <slot name="navbar"></slot>
    <div class="page-content">
     <slot></slot>
    </div>
  </div>
 </div>

</template>

<script>
export default {
  props: {
    navbarFixed: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [
        {
          'navbar-fixed': this.navbarFixed
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/components/page";
</style>
