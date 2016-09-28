<template>
 <div class="page">
  <Navbar type="secondary" slot="navbar">
      图标
  </Navbar>
  <Content>
    <div class="content-block">
      <div class="row">
        <div class="col-20">
          <btn>
           <icon type="up"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="down"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="right"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="left"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="wifi01"></icon>
          </btn>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <btn>
           <icon type="accountsecuriyt"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="addpo"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="my"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="delete"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="love"></icon>
          </btn>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <btn>
           <icon type="star"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="map"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="check"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="lock"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="share"></icon>
          </btn>
        </div>
      </div>
      <div class="row">
        <div class="col-20">
          <btn>
           <icon type="more"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="microphone"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="send"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="cross"></icon>
          </btn>
        </div>
        <div class="col-20">
          <btn>
           <icon type="filter"></icon>
          </btn>
        </div>
      </div>
    </div>
  </Content>
 </div>
</template>

<script>
import { Icon, Btn, Navbar, Content } from '../components'
export default {
  components: {
    Icon,
    Btn,
    Navbar,
    Content
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
