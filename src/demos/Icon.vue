<template>
<Page>
  <Navbar type="secondary" slot="navbar">
      图标 icon
  </Navbar>
  <div class="content-block">
    <div class="row">
      <div class="col-20">
        <btn icon>
         <icon type="up"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="down"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="right"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="left"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="wifi01"></icon>
        </btn>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <btn icon>
         <icon type="accountsecuriyt"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="addpo"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="my"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="delete"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="love"></icon>
        </btn>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <btn icon>
         <icon type="star"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="map"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="check"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="lock"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="share"></icon>
        </btn>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <btn icon>
         <icon type="more"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="microphone"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="send"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="cross"></icon>
        </btn>
      </div>
      <div class="col-20">
        <btn icon>
         <icon type="filter"></icon>
        </btn>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
import { Icon, Btn, Navbar, Page } from '../components'
export default {
  components: {
    Icon,
    Btn,
    Navbar,
    Page
  }
}
</script>

<style scoped lang="less">
  .col-20{
    text-align: center;
  }
  .row{
    margin-bottom:32px;
  }
</style>
