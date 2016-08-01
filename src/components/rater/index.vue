<template>
  <div class="rater" :class="classes">
    <template  v-for="i in value">
      <span class="active">{{star}}</span>
    </template><template  v-for="i in max - value">
      <span>{{star}}</span>
    </template>
  </div>
</template>

<script>
export default {
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
      console.log(this.value)
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
