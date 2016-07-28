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
    },
    size: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        this.link ? 'icon-img' : '',
        this.radius ? 'radius' : '',
        this.circle ? 'circle' : '',
        this.type ? `icon-${this.type}` : ''
      ]
    },
    styles () {
      return [
        this.link ? { backgroundImage: 'url(' + this.link + ')' } : '',
        this.size ? { width: this.size + 'px', height: this.size + 'px' } : ''
      ]
    }
  }
}
</script>
