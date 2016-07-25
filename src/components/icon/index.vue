<template>
  <i class="icon" :class="classes" :style="styles"></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        this.link ? 'icon-img' : '',
        this.type ? `icon-${this.type}` : ''
      ]
    },
    styles () {
      return [
        this.link ? { backgroundImage: 'url(' + this.link + ')' } : ''
      ]
    }
  }
}
</script>
