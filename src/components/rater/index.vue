<template>
  <div class="rater" :class="classes">
    <span>{{star}}</span>
  </div>
</template>

<script>
export default {
  ready () {
    this.updateStyle()
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    star: {
      type: String,
      default: '★'
    },
    size: {
      type: Number,
      default: 25
    }
  },
  methods: {
    classes () {
      return [
        this.size ? `rater-${this.size}` : ''
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/components/rater";
</style>
