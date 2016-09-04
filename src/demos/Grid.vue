<template>
  <Page>
    <Navbar type="secondary" slot="navbar">
        栅格
    </Navbar>
    <title>
      无间距的列 No gutter between columns
    </title>
    <block>
      <row>
        <column span="50">50</column>
        <column span="50">50</column>
      </row>
      <row>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="25">25</column>
      </row>
      <row>
        <column span="33">33</column>
        <column span="33">33</column>
        <column span="33">33</column>
      </row>
      <row>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
      </row>
      <row>
        <column span="33">33</column>
        <column span="66">66</column>
      </row>
      <row>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="50">50</column>
      </row>
      <row>
        <column span="75">75</column>
        <column span="25">25</column>
      </row>
      <row>
        <column span="80">80</column>
        <column span="20">20</column>
      </row>
    </block>
    <title>
      有间距的列 Columns with gutter
    </title>
    <block>
      <row gutter>
        <column span="50">50</column>
        <column span="50">50</column>
      </row>
      <row gutter>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="25">25</column>
      </row>
      <row gutter>
        <column span="33">33</column>
        <column span="33">33</column>
        <column span="33">33</column>
      </row>
      <row gutter>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
        <column span="20">20</column>
      </row>
      <row gutter>
        <column span="33">33</column>
        <column span="66">66</column>
      </row>
      <row gutter>
        <column span="25">25</column>
        <column span="25">25</column>
        <column span="50">50</column>
      </row>
      <row gutter>
        <column span="75">75</column>
        <column span="25">25</column>
      </row>
      <row gutter>
        <column span="80">80</column>
        <column span="20">20</column>
      </row>
    </block>
  </Page>
</template>

<script>
import { Row, Column, Page, Navbar, Block, Title } from '../components'
export default {
  components: {
    Row,
    Page,
    Column,
    Navbar,
    Block,
    Title
  }
}
</script>

<style scoped lang="less">
 .row{
   &:last-child{
     [class*="col-"]{
       margin-bottom: 0;
     }
   }
 }
 [class*="col-"]{
   text-align: center;
   height: 32px;
   line-height: 32px;
   margin-bottom: 16px;
   position: relative;
   &:after{
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     border: solid 1px #bec0bf;
     box-sizing: border-box;
     width: e("calc(300% - 2px)");
     height: e("calc(300% - 2px)");
     transform: scale(0.3333);
     transform-origin: 0 0;
   }
 }
</style>
