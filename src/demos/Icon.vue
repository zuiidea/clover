<template>
<Page>
  <Navbar type="secondary" slot="navbar">
      图标 icon
  </Navbar>
  <div class="content-block">
    <div class="row">
      <div class="col-20">
        <c-button icon>
         <icon type="up"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="down"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="right"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="left"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="wifi01"></icon>
        </c-button>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <c-button icon>
         <icon type="accountsecuriyt"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="addpo"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="my"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="delete"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="love"></icon>
        </c-button>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <c-button icon>
         <icon type="star"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="map"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="check"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="lock"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="share"></icon>
        </c-button>
      </div>
    </div>
    <div class="row">
      <div class="col-20">
        <c-button icon>
         <icon type="more"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="microphone"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="send"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="cross"></icon>
        </c-button>
      </div>
      <div class="col-20">
        <c-button icon>
         <icon type="filter"></icon>
        </c-button>
      </div>
    </div>
  </div>
</Page>
</template>

<script>
import { Icon, CButton, Navbar, Page } from '../components'
export default {
  components: {
    Icon,
    CButton,
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
