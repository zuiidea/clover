<template>
  <div :class="'col-'+span">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: String
  }
}
</script>
