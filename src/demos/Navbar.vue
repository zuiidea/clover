<template>

  <Navbar>
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
      <c-button icon small>
       <icon type="cross"></icon>
      </c-button>
    </div>
    </Navbar>
    <Navbar class="m-t">
       <div>666</div>
      <div slot="right">
        <c-button icon small>
         <icon type="cross"></icon>
        </c-button>
      </div>
  </Navbar>
  <Navbar class="m-t">
    <div slot="left">
      <c-button icon small>
        <icon type="filter"></icon>
      </c-button>
    </div>
     标题
   </Navbar>
   <Navbar class="m-t">
   标题
   </Navbar>
  <div class="content-block-title">
    默认 default
  </div>
  <Navbar type="secondary">
    标题
  </Navbar>
  <div class="content-block-title">
    次级 secondary
  </div>

  <Navbar type="tab">
    标题
  </Navbar>
  <div class="content-block-title">
    标签页 tab
  </div>
</template>

<script>
import { Navbar, Icon, CButton } from '../components'
export default {
  components: {
    Navbar,
    Icon,
    CButton
  }
}
</script>

<style scoped lang="less">
.m-t{
  margin-top:16px;
}
</style>
