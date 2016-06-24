<template>
  <div class="button">
    <a href="/home">按钮666</a>
    <button type="warn">66</button>
  </div>
</template>

<script>
 import { Button } from '../components'
 export default {
   components: {
     Button
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
