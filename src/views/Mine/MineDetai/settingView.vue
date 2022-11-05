<template>
  <div class="box">
    <van-nav-bar
  :title="titlename"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  :fixed="top"
  />
<component :is="com"></component>
<div class="null"></div>
  </div>

</template>

<script>
import date from '@/components/dataView'
import emptyPage from '@/components/emptyPage'
export default {
  props: ['setting', 'id'],
  methods: {
    onClickLeft () {
      window.history.back()
    }
  },
  created () {
    if (this.id === '1') {
      this.titlename = '合成活动'
      this.com = 'emptyPage'
    }
    if (this.id === '2') {
      this.titlename = '邀请新人'
      this.com = 'emptyPage'
    }
    if (this.id === '3') {
      this.titlename = '个人中心'
      this.com = 'date'
    }
  },
  data () {
    return {
      titlename: '123',
      com: '',
      top: true
    }
  },
  components: {
    date, emptyPage
  }
}
</script>

<style lang="less" scoped>
.text{
  margin: 4vh 10vw;
  margin-left: 9vw;
  border:2px solid grey;
  text-align: left;
  padding-left: 3vw;
}*{
  margin: 0;
}.null{
  width: 100vw;
  height: 7vh;

}a{
  font-size: 4vw;
  font-weight: bold;

}p{
  margin: 2vh;
}img{

  width:  7vh;
  height: 7vh;
}
</style>
