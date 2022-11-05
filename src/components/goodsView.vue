<template>
  <div>
    <div class="box-body">
    <div class="pic">   <img :src="'http://cugb760.afeiandld.top/xmpic/'+pic" alt=""></div>
    <div class="message">
    <p>名称：{{name}}</p>
    <p class="price">价格：￥{{price}}</p>
    <p>上架时间：{{time|dateFormat}}</p>
    <p>编号：{{cid}}/{{sum}}</p>
    </div>
    <button @click="buy">购买</button>
  </div>
  <hr/>
  </div>
</template>

<script>
import bus from '@/eventBus'
export default {
  methods: {
    buy () {
      bus.$emit('state', { state: true, name: this.name, price: this.price, cid: this.cid })
      window.location.hash = '/getNew'
    }
  },
  props: {
    price: [Number, String],
    time: {},
    name: {
      default: 'Mua2106'
    },
    cid: {},
    pic: {},
    sum: {}
  }
}
</script>

<style lang="less" scoped>
  .box-body{
    width: 100%;
  height: 14vh;
  display: flex;
  .message{
    width: 70vw;
    margin-top: 3vh;
    p{
  margin-top: 0;
  margin-left: 5vw;
  line-height: 1.5vh;
  text-align: left;
  width: 100%;
}
}
  }
img{
  margin: 1vh 0 1vh 5vw;
  width: 12vh;
  height: 12vh;
}*{
  font-size: 1.5vh;
}button{
  margin-top: 9vh;
  margin-right: 5vw;
  width: 16vw;
  height: 4vh;
  background-color: skyblue;
}
</style>
