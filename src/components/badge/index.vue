<template>
  <span class="badge" :class="'bg-'+bgColor">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    bgColor: String
  }
}
</script>
