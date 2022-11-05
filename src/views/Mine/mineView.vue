<template>
  <div >
   <Login v-if="login"></Login>
   <div v-else>
    <van-nav-bar  title="我的" />
    <div class="header">
    <div class="pic"> <img :src="'http://cugb760.afeiandld.top/xmpic/'+pic"></div>
    <div class="message">
    <p>{{username}}</p>
    </div>
      </div>
    <div class="content">
      <div style="background-color:antiquewhite; width: 90%; height: 3vh;margin-left:5vw;margin-top: 2vh;">
       <a style="float: left;text-align: center; margin-left:5vw; font-weight: bold;">账户余额</a>
          <a style="float: right;text-align: center;margin-right:8vw;">￥{{money}}</a>
      </div>
     <div style="background-color:azure; width: 90%; height: 14vh;margin-left:5vw;margin-top: 0vh;">
      <p style="float: left;text-align: left; margin-left:5vw; margin-top: 1vh;font-weight: bold;width: 100%;">我的订单</p>
      <div class="icon">
        <van-icon name="orders-o" size="2rem" /> <van-icon name="todo-list-o" size="2rem"/>
      <van-icon name="balance-list-o" size="2rem"/> <van-icon name="delete-o" size="2rem"/>
      </div>
      <div class="icon">
      <a href="http://www.afeiandld.top/#/order/1">全部</a>
      <a href="http://www.afeiandld.top/#/order/2">待支付</a>
      <a href="http://www.afeiandld.top/#/order/3">已支付</a>
      <a href="http://www.afeiandld.top/#/order/4">已取消</a>
      </div>
      </div>
      <div style="background-color:azure; width: 90%; height: 14vh;margin-left:5vw;margin-top: 3vh;">
        <p style="float: left;text-align: left; margin-left:5vw; margin-top: 1vh;font-weight: bold;width: 100%;">我的藏品</p>
        <div class="icon">
        <van-icon name="points" size="2rem"/> <van-icon name="shop-o" size="2rem"/>
      <van-icon name="refund-o" size="2rem"/>
      </div>
      <div class="icon">
      <a href="http://www.afeiandld.top/#/stuff/1">收藏中</a>
      <a href="http://www.afeiandld.top/#/stuff/2">转售中</a>
      <a href="http://www.afeiandld.top/#/stuff/3">已转售</a>
      </div>
      </div>
      <div style="background-color:azure; width: 90%; height: 14vh;margin-left:5vw;margin-top: 3vh;">
        <p style="float: left;text-align: left; margin-left:5vw; margin-top: 1vh;font-weight: bold;width: 100%;">我的服务</p>
        <div class="icon">
        <van-icon name="point-gift" size="2rem" href="http://172.20.99.80:8080/#/setting/1"/>
        <van-icon name="friends" size="2rem" href="http://172.20.99.80:8080/#/setting/2"/>
      <van-icon name="setting" size="2rem" href="http://172.20.99.80:8080/#/setting/3"/>
      </div>
      <div class="icon">
      <a href="http://www.afeiandld.top/#/setting/1">合成活动</a>
      <a href="http://www.afeiandld.top/#/setting/2">邀请新人</a>
      <a href="http://www.afeiandld.top/#/setting/3">设置</a>
      </div>
      </div>
   </div>
</div>
  </div>
</template>

<script>
import Login from '@/views/Mine/loginView'
import bus from '@/eventBus'
export default {
  data () {
    return {
      login: true,
      userInfo: {},
      pic: '',
      username: '',
      money: 0
    }
  },
  components: {
    Login
  },
  created () {
    bus.$on('userInfo', val => {
      this.userInfo = val
    })
    const cookie = localStorage.getItem('token')
    if (cookie) {
      this.login = false
      this.pic = localStorage.getItem('pic')
      this.money = parseFloat(localStorage.getItem('money'))
      this.username = localStorage.getItem('username')
    }
  }
}
</script>

<style lang="less" scoped>
img{
  margin: 2vh  0 0 5vw;
  float: left;
  border-radius: 50%;
  width:  12vh;
  height: 12vh;
}
.header{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 15vh;
  .pic{
    flex:2
  }
  .message{
    float: left;
  margin-top: 8vh;
  margin-right: 30vw;
   flex:9
   }
}
.icon{
display: flex;
width:90vw;
*{
  flex:1
}
font-size: 14px;
   }body{
    touch-action: none;
   }
</style>
