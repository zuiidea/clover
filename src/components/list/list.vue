<template>
  <div class="list-block" :class="'list-'+type">
    <ul>
    <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
