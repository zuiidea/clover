<template>
  <Page>
    <div class="content-block-title">
      默认 Default
    </div>
    <list>
      <list-item>
        <div slot="media">
          <icon type="my" small></btn>
        </div>
      <div class="item-title">
        Ivan Petrov
      </div>
      <div class="item-after">
       CEO
      </div>
      </list-item>
    </list>
  </Page>
</template>

<script>
import { List, ListItem, Btn, Icon } from '../components'

export default {
  components: {
    List,
    ListItem,
    Btn,
    Icon
  }
}
</script>

<style scoped lang="less">

</style>
