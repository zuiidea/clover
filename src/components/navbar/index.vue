<template>
  <div class="navbar" :class="classes">
    <div class="navbar-inner">
      <div class="left">
        <i class="icon icon-back"></i>
      </div>
      <div class="center">字体详情</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        {
          'navbar-back': this.back
        },
        this.type ? `navbar-${this.type}` : ''
      ]
    }
  }
}
</script>
