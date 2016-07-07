<template>
  <Page>
    <div class="content-block-title">
      Columns with gutter
    </div>
    <div class="content-block">
      <row>
        <colu span="50">.col-50</colu>
        <colu span="50">.col-50</colu>
      </row>
    </div>
    <div class="content-block-title">
      No gutter between columns
    </div>

  </Page>
</template>

<script>
import { Row, Colu, Page } from '../components'
export default {
  components: {
    Row,
    Page,
    Colu
  }
}
</script>

<style scoped lang="less">

</style>
