<template>
  <Page>
    <Navbar type="secondary" slot="navbar">
        列表 list
    </Navbar>
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
       <badge bg-color="blue">New</badge>
      </div>
      </list-item>
      <list-item link>
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
import { List, ListItem, Btn, Icon, Badge } from '../components'

export default {
  components: {
    List,
    ListItem,
    Btn,
    Icon,
    Badge
  }
}
</script>

<style scoped lang="less">

</style>
