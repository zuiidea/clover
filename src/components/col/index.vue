<template>
  <div :class="['col-'+span]">
    <slot></slot>66
  </div>
</template>

<script>
export default {
  props: {
    span: String
  }
}
</script>
