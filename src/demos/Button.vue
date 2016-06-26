<template>
  <div>
  <div class="content-block-title">默认 default</div>
  <div class="content-block">
      <c-button>按钮</c-button>
  </div>

  <div class="content-block-title">尺寸 small</div>
  <div class="content-block">
    <c-button small>按钮</c-button>
    <c-button small color="green">按钮</c-button>
    <c-button small color="orange">按钮</c-button>
    <c-button>按钮</c-button>
  </div>

  <div class="content-block-title">颜色 color</div>
  <div class="content-block">
    <c-button>按钮</c-button>
    <c-button color="green">按钮</c-button>
    <c-button color="orange">按钮</c-button>
  </div>

  <div class="content-block-title">填充 fill</div>
  <div class="content-block">
    <c-button fill>按钮</c-button>
    <c-button fill color="green">按钮</c-button>
    <c-button fill color="orange">按钮</c-button>
  </div>

  <div class="content-block-title">圆角 radius</div>
  <div class="content-block">
    <c-button radius>按钮</c-button>
    <c-button radius color="green">按钮</c-button>
    <c-button radius small>按钮</c-button>
  </div>
  </div>

  <div class="content-block-title">图标 icon</div>
  <div class="content-block">
    <c-button icon>
     <icon type="up"></icon>
    </c-button>
    <c-button icon>
     <icon type="down"></icon>
    </c-button>
    <c-button icon>
     <icon type="right"></icon>
    </c-button>
    <c-button icon>
     <icon type="left"></icon>
    </c-button>
    <c-button icon>
     <icon type="wifi01"></icon>
    </c-button>
    <c-button icon>
     <icon type="cross"></icon>
    </c-button>
    <c-button icon>
     <icon type="more"></icon>
    </c-button>
    <c-button icon>
     <icon type="share"></icon>
    </c-button>
  </div>

  <div class="content-block-title">禁止 disabled</div>
  <div class="content-block">
    <c-button disabled>按钮</c-button>
  </div>

  <div class="content-block-title">全宽 fluid</div>
  <div class="content-block">
    <c-button fluid radius color="green">按钮</c-button>
    <c-button fluid radius  class="m-t">按钮</c-button>
    <c-button fluid  class="m-t">按钮</c-button>
  </div>

  <div class="content-block-title">组合 row</div>
  <div class="content-block">
    <p class="buttons-row">
      <c-button radius small>按钮</c-button>
      <c-button radius small>按钮</c-button>
      <c-button radius color="green" small>按钮</c-button>
      <c-button radius color="orange" small>按钮</c-button>
    </p>
    <p class="buttons-row">
      <c-button color="green">按钮</c-button>
      <c-button color="orange">按钮</c-button>
    </p>
  </div>
  </div>
</template>

<script>
 import { CButton, Icon } from '../components'
 export default {
   name: 'button',
   components: {
     CButton,
     Icon
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
