<template>
  <div :class="'col-'+span">
    <slot></slot>
  </civ>
</template>

<script>
export default {
  props: {
    span: String
  }
}
</script>
