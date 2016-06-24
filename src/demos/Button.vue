<template>
  <div class="button">
    <a href="/home">按钮666</a>
    <c-button type="warn">66</c-button>
  </div>
</template>

<script>
 import { CButton } from '../components'
 export default {
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
