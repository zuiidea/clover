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
       <badge>New</badge>
      </div>
      </list-item>
  </Page>
</template>

<script>
import { List, ListItem, Badge } from '../components'

export default {
  components: {
    List,
    ListItem,
    Badge
  }
}
</script>

<style scoped lang="less">

</style>
