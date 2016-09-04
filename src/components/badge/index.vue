<template>
  <span class="badge" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        {
          'badge-small': this.small
        },
        this.color ? `bg-${this.bgColor}` : ''
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/components/badge";
</style>
