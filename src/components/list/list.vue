<template>
  <div class="list-block" :class="classes">
    <ul>
    <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        this.type ? `list-${this.type}` : ''
      ]
    }
  }
}
</script>
