<template>
  <Page>
    <div class="content-block-title">
      Columns with gutter
    </div>
    <div class="content-block">
      <row>
        <column span="50">.col-50</column>
        <column span="50">.col-50</column>
      </row>
    </div>
    <div class="content-block-title">
      No gutter between columns
    </div>

  </Page>
</template>

<script>
import { Row, Column, Page } from '../components'
export default {
  components: {
    Row,
    Page,
    Column
  }
}
</script>

<style scoped lang="less">

</style>
