<template>
  <i class="icon" :class="['icon-'+type]"></i>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
