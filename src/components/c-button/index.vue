<template>
  <button
    class="button"
    :class="['button-' + type, 'button-' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
    @touchstart="handleClick">
    <span class="button-icon">
      <slot name="icon">
        <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
      </slot>
    </span>
    <label class="button-text"><slot></slot></label>
  </button>
</template>

<script>
export default {
  name: 'mt-button',
  props: {
    icon: String,
    disabled: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
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
