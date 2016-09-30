<template>
 <div class="page">
  <Navbar type="secondary" slot="navbar">
      顶部 navbar
  </Navbar>
  <Content>
   <div class="content-block-title">
     默认 default
   </div>
   <Navbar class="demo">
     <div slot="left">
       <btn icon="send" small></btn>
     </div>
     标题
     <div slot="right">
      <btn icon="send" small></btn>
     </div>
   </Navbar>
   <Navbar class="demo">
        <div>标题</div>
       <div slot="right">
        <btn icon="send" small></btn>
       </div>
   </Navbar>
   <Navbar class="demo">
     <div slot="left">
      <btn icon="send" small></btn>
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
   <Navbar type="secondary" :back="false" class="demo">
     标题
   </Navbar>
   <div class="content-block-title">
     标签页 tab
   </div>
   <Navbar type="tab" class="demo">
     <div slot="left">
      <btn icon="send" small></btn>
     </div>
     标题
     <div slot="right">
      <btn icon="send" small></btn>
     </div>
   </Navbar>
  </Content>
 </div>
</template>

<script>
import { Navbar, Icon, Btn, Content } from '../components'
export default {
  components: {
    Navbar,
    Icon,
    Btn,
    Content
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
