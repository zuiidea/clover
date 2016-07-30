<template>
  <li>
    <a class="item-link item-content"  v-if="link">
      <div class="item-media">
        <slot name="media"></slot>
      </div>
      <div class="item-inner">
        <slot></slot>
      </div>
    </a>
    <div class="item-content" v-else="link">
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
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasMedia: function () {
      return !!this.$el.querySelector('[slot="media"]')
    }
  },
  events: {
    'hook:ready': function () {
      if (!this.$el.querySelector('[slot="media"]')) {
        // document.body.removeChild(this.$el.querySelector('.item-media'))
        this.$el.querySelector('.item-media').$remove()
      }
    }
  }
}
</script>
