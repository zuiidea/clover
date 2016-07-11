<template>
  <Page>
  <Navbar type="secondary" slot="navbar">
      按钮 btn
  </Navbar>
  <div class="content-block-title">默认 default</div>
  <div class="content-block">
      <btn>按钮</btn>
  </div>

  <div class="content-block-title">尺寸 small</div>
  <div class="content-block">
    <btn small>按钮</btn>
    <btn small color="green">按钮</btn>
    <btn small color="orange">按钮</btn>
    <btn>按钮</btn>
  </div>

  <div class="content-block-title">颜色 color</div>
  <div class="content-block">
    <btn>按钮</btn>
    <btn color="green">按钮</btn>
    <btn color="orange">按钮</btn>
  </div>

  <div class="content-block-title">填充 fill</div>
  <div class="content-block">
    <btn fill>按钮</btn>
    <btn fill color="green">按钮</btn>
    <btn fill color="orange">按钮</btn>
  </div>

  <div class="content-block-title">圆角 radius</div>
  <div class="content-block">
    <btn radius>按钮</btn>
    <btn radius color="green">按钮</btn>
    <btn radius small>按钮</btn>
  </div>

  <div class="content-block-title">图标 icon</div>
  <div class="content-block">
    <btn icon small>
     <icon type="up"></icon>
    </btn>
    <btn icon>
     <icon type="down"></icon>
    </btn>
    <btn icon>
     <icon type="right"></icon>
    </btn>
    <btn icon>
     <icon type="left"></icon>
    </btn>
    <btn icon>
     <icon type="wifi01"></icon>
    </btn>
    <btn icon>
     <icon type="cross"></icon>
    </btn>
    <btn icon>
     <icon type="more"></icon>
    </btn>
    <btn icon>
     <icon type="share"></icon>
    </btn>
  </div>

  <div class="content-block-title">禁止 disabled</div>
  <div class="content-block">
    <btn disabled>按钮</btn>
  </div>

  <div class="content-block-title">全宽 fluid</div>
  <div class="content-block">
    <btn fluid radius color="green">按钮</btn>
    <btn fluid radius  class="m-t">按钮</btn>
    <btn fluid  class="m-t">按钮</btn>
  </div>

  <div class="content-block-title">组合 row</div>
  <div class="content-block">
    <p class="buttons-row">
      <btn radius small>按钮</btn>
      <btn radius small>按钮</btn>
      <btn radius color="green" small>按钮</btn>
      <btn radius color="orange" small>按钮</btn>
    </p>
    <p class="buttons-row">
      <btn color="green">按钮</btn>
      <btn color="orange">按钮</btn>
    </p>
  </div>
  </Page>
</template>

<script>
 import { Btn, Icon, Navbar, Page } from '../components'
 export default {
   name: 'button',
   components: {
     Btn,
     Icon,
     Navbar,
     Page
   },
   methods: {
     change (value) {
       console.log('change:', value)
     },
     processButton001 () {
       this.submit001 = 'processing'
       this.disable001 = true
     },
     data () {
       return {
         submit001: 'click me',
         disable001: false
       }
     }
   }
 }
</script>
<style scoped>
  .m-t{
    margin-top: 16px;
  }
</style>
