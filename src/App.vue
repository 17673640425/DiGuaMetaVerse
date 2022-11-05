<template>
  <div id="app">
    <van-tabbar v-model="active" route v-if="tabState">
    <van-tabbar-item icon="wap-home" to="/index">首页 </van-tabbar-item>
    <van-tabbar-item icon="cart" to="/market">市场</van-tabbar-item>
    <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    <!-- <keep-alive> -->
      <router-view :val="val" :setting="set"></router-view>
 <!-- </keep-alive> -->
    <div class="null"></div>
  </div>
</template>
<script>
import bus from '@/eventBus'
export default {

  data () {
    return {
      active: 0,
      tabState: true,
      val: {},
      set: {
        titlename: '个人设置'
      }
    }
  },
  methods: {

  },
  created  () {
    bus.$on('state', val => {
      this.val = val
    })
  },
  updated () {
    if (window.location.href.includes('getNew') || window.location.href.includes('pay')) this.tabState = false
    else this.tabState = true
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.null{
  width: 100vw;
  height: 10vh;
}
</style>
