<template>
  <li>
    <div class="item-content">
      <div class="item-media">
        <slot name="media"></slot>
      </div>
      <div class="item-inner">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
