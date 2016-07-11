<template>
  <a href="javascript:;"
  class="button" :class="classes" :disabled="disabled"
  @touchstart="handleClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        {
          'disabled': this.disabled,
          'button-fill': this.fill,
          'button-small': this.small,
          'button-radius': this.radius,
          'button-fluid': this.fluid,
          'button-icon': this.icon
        },
        this.color ? `button-${this.color}` : ''
      ]
    }
  },
  methods: {
    handleClick ($event) {
      if (this.disabled) {
        $event.preventDefault()
        $event.stopPropagation()
      }
    }
  }
}
</script>
