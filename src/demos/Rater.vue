<template>
  <Page>
    <div class="content-block-title">
      Rater
    </div>
    <div class="content-block">
      <row>
        <column span="50">
          <rater>
        </column>
        <column span="50">.col-50</column>
      </row>
    </div>
    <div class="content-block-title">
      No gutter between columns
    </div>

  </Page>
</template>

<script>
import { Row, Column, Page, Rater } from '../components'
export default {
  components: {
    Row,
    Page,
    Column,
    Rater
  }
}
</script>
