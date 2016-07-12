<template>
<div class="main">
    <div class="mobile">
        <div class="mobile-inner">
            <iframe src="#!/demo" frameborder="0"></iframe>
        </div>
        <a class="btn" v-link="{ path: '/demo' }">
            <Icon type="send"></Icon>
        </a>
    </div>
</div>
</template>

<script>
import { Icon } from './components'
export default {
  components: {
    Icon
  }
}
</script>

<style scoped lang="less">
@import './styles/normalize.css';
@import './styles/index.less';
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.5);*/
}
::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0, 0, 0, 0.4);
}
</style>
