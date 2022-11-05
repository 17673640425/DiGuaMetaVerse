<template>
  <div>
    <van-nav-bar
  :title="titlename"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  :fixed="top"
  />

  <div class="text  first-box" style="background-color: white;width: 80vw;height: 6vh;">
    <p>等待付款</p>
    <a>支付剩余时间: {{time}}</a>
  </div>

  <div  class="text" style="background-color: white;width: 80vw;height: 20vh;">
             <p>订单编号:</p>
             <a>122345332131</a>
             <hr>
             <p>{{name}}</p>
             <p><img :src="'http://www.afeiandld.top/xmpic/'+img"></p>
             <a>价格：{{price}} 积点</a>
  </div>

              <div  class="text" style="background-color: white;width: 80vw;height: 12vh;">
             <a>支付方式</a>
             <br/><br/>
             <a>钱包支付</a>
              <a>余额:  {{money}}</a>
            <input type="checkbox" checked="1" @click.prevent>
             </div>
             <div style="position:fixed;bottom:0;z-index: 9999;">
              <button>取消订单</button>
              <button>立即支付</button>
            </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      window.history.back()
    },
    pay () {
      window.location.hash = '/market'
    },
    cancel () {
      window.location.hash = '/market'
    }
  },
  data () {
    return {
      top: true,
      titlename: '订单详情',
      money: 1,
      time: '5:00',
      name: 'Mua2106',
      price: '100.00',
      img: '1663613452848.jpg'
    }
  },
  created () {
    this.money = parseFloat(localStorage.getItem('money'))
  }
}
</script>

<style lang="less" scoped>
img{
  width: 15vw;
  height: 15vw;
  border: 1px solid gray;
}.first-box{
  margin-top: 10vh  !important
}.text{
  margin: 5vh 0 0 0;
  margin-left: 6vw;
  border:2px solid grey;
  text-align: left;
  padding: 1vh 4vw 1vh 4vw;
}.null{
  width: 100vw;
  height: 4vh;
}*{
  margin: 0;
}button{
  color:white;
  width: 50vw;
  height: 7vh;
  background-color:rgb(255,0,0);
}input{
  float: right;
  margin-right: 10vw;
  margin-top: 1vw;
}p{
  font-weight : bold;
}
</style>
