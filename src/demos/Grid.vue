<template>
  <Page>
    <div class="content-block-title">
      Columns with gutter
    </div>
    <div class="content-block">
      <row>
        <col span="50">.col-50</col>
        <col span="50">.col-50</col>
      </row>
    </div>
    <div class="content-block-title">
      No gutter between columns
    </div>

  </Page>
</template>

<script>
import { Row, Col, Page } from '../components'
export default {
  components: {
    Row,
    Page,
    Col
  }
}
</script>

<style scoped lang="less">

</style>
