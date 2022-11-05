<template>
  <div>
    <div class="text" style="background-color: white;width: 80vw;height: 20vh;">
                <a>订单编号:{{ordernumber}}</a>
                <hr>
                <img src="../img/BH.jpg" alt="">
                <br>
                <a>藏品名称:{{name}}</a>
                <a>藏品编号:{{gid}}</a>
                <a>价格￥{{price}}</a><a>{{msg}}</a>
  </div>
  </div>
</template>

<script>
export default {
  props: ['ordernumber', 'price', 'pic', 'gid', 'name', 'state'],
  data () {
    return {
      msg: ''
    }
  },
  created () {
    if (this.state === 0) this.msg = '已取消'
    else if (this.state === 1) this.msg = '支付中'
    else this.msg = '已付款'
  }
}
</script>

<style lang="less" scoped>

.text{
  margin: 4vh 10vw;
  margin-left: 7vw;
  border:2px solid grey;
  text-align: left;
  padding: 1vh 3vw 1vh 3vw;
}*{
  margin: 0;
}.null{
  width: 100vw;
  height: 7vh;

}p{
  margin-left: 2vh;
}img{

  width:  10vh;
  height: 10vh;
}
</style>
