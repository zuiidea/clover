<template>
  <button
    class="button"
    :class="['button-' + type, 'button-' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
    @touchstart="handleClick">
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    text: String
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
