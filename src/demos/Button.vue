<template>
  <div class="card">
    <c-button type="default">按钮</c-button>
  </div>
</template>

<script>
 import { CButton } from '../components'
 export default {
   name: 'button',
   components: {
     CButton
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
<style lang="less">
.card{
  padding: 24px;
}
</style>
