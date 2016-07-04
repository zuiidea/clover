<template>
  <Page>
  <Navbar type="secondary" slot="navbar">
      顶部 navbar
  </Navbar>
  <div class="content-block-title">
    默认 default
  </div>
  <Navbar class="demo">
    <div slot="left">
      <c-button icon small>
        <icon type="filter"></icon>
      </c-button>
    </div>
    标题
    <div slot="right">
      <c-button icon small>
       <icon type="cross"></icon>
      </c-button>
    </div>
  </Navbar>
  <Navbar class="demo">
       <div>标题</div>
      <div slot="right">
        <c-button icon small>
         <icon type="cross"></icon>
        </c-button>
      </div>
  </Navbar>
  <Navbar class="demo">
    <div slot="left">
      <c-button icon small>
        <icon type="filter"></icon>
      </c-button>
    </div>
     标题
  </Navbar>
  <Navbar class="demo">
   标题
  </Navbar>
  <div class="content-block-title">
     次级 secondary
  </div>
  <Navbar type="secondary">
    标题
  </Navbar>
  <Navbar type="secondary" back=false class="demo">
    标题
  </Navbar>
  <div class="content-block-title">
    标签页 tab
  </div>
  <Navbar type="tab" class="demo">
    <div slot="left">
      <c-button icon small>
        <icon type="filter"></icon>
      </c-button>
    </div>
    标题
    <div slot="right">
      <c-button icon small>
       <icon type="cross"></icon>
      </c-button>
    </div>
  </Navbar>
  </Page>
</template>

<script>
import { Navbar, Icon, CButton, Page } from '../components'
export default {
  components: {
    Navbar,
    Icon,
    CButton,
    Page
  }
}
</script>

<style scoped lang="less">
.demo{
  margin-top:16px;
  margin-bottom:16px;
  position:relative!important;
}
</style>
