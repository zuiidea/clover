<template>
  <i class="icon" :class="classes" :style="styles"></i>
</template>

<script>
export default {
  data () {
    if (this.link) {
      return {
        img: require('../../assets/' + this.link)
      }
    }
    return {}
  },
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
        this.link ? { backgroundImage: `url(${this.img})` } : ''
      ]
    }
  }
}
</script>
