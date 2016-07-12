<template>
  <div :class="'list-'+type">
    <slot></slot>
  </civ>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
