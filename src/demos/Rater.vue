<template>
 <div class="page">
  <Content>
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
  </Content>
 </div>
</template>

<script>
import { Row, Column, Content, Rater } from '../components'
export default {
  components: {
    Row,
    Content,
    Column,
    Rater
  }
}
</script>
