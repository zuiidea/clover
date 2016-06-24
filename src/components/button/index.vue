<template>
  <button class="weui_btn" :class="classes" :disabled="disabled">
    {{text}}
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
