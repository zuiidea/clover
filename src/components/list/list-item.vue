<template>
  <li>
    <a class="item-link item-content"  v-if="link">
      <div class="item-media" v-if="hasMedia">
        <slot name="media"></slot>
      </div>
      <div class="item-inner">
        <slot></slot>
      </div>
    </a>
    <div class="item-content" v-else="link">
      <div class="item-media" v-if="hasMedia">
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
    link: {
      type: Boolean,
      default: false
    },
    hasMedia: {
      type: Boolean,
      default: true
    }
  },
  events: {
    'hook:ready': function () {
      this.$nextTick(function () {
        this.hasMedia = !!this.$el.querySelector('[slot="media"]')
      })
    }
  }
}
</script>
