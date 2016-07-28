<template>
  <div class="list-block" :class="classes">
    <ul>
    <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        {
          'media-list': this.media
        }
      ]
    }
  }
}
</script>
