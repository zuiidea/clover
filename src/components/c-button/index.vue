<template>
  <button
    class="mint-button"
    :class="['mint-button--' + type, 'mint-button--' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
    @touchstart="handleClick">
    <span class="mint-button-icon">
      <slot name="icon">
        <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
      </slot>
    </span>
    <label class="mint-button-text"><slot></slot></label>
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
<style media="screen">
.button {
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 41px;
  line-height: 2.6rem;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
}
</style>
