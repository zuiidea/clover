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
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        {
          'rater-small': this.small
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/components/rater";
</style>
