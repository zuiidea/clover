<template>
  <span class="badge" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    bgColor: String
  },
  computed: {
    classes () {
      return [
        this.color ? `bg-${this.bgColor}` : ''
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/components/badge";
</style>
