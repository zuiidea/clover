<template>
  <div class="navbar" :class="classes">
    <div class="navbar-inner">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center" @click="center">
        <i class="icon icon-left" v-if="type=='secondary'&&back" ></i>
        <slot></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
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
      default: function () {
        let value = false
        if (this.type === 'secondary') {
          value = true
        }
        return value
      }
    }
  },
  computed: {
    classes () {
      return [
        {
        },
        this.type ? `navbar-${this.type}` : ''
      ]
    }
  },
  methods: {
    center () {
      if (this.type === 'secondary') {
        window.history.go(-1)
      }
    }
  }
}
</script>
