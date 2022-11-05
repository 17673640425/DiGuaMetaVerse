<template>
  <div>
   <div class="box">
   <div class="img">
   <img  :src="'http://cugb760.afeiandld.top/xmpic/'+img" alt="">
   </div>
   <div class="introduction">
   <p class="left-1">藏品名称：{{name}}</p> <p class="right">地瓜数藏</p>
   <p>价格：￥{{price}}</p><p class="right-1">发售时间:{{time|dateFormat}}</p>
   </div>
   </div>
   <hr>
  </div>
</template>

<script>
export default {
  props: ['img', 'price', 'name', 'time']
}
</script>

<style lang="less" scoped>
img{
  width: 80vw;
  height: 80vw;
}.introduction{
  margin-left: 5vw;
  text-align: left;
  display: flexbox;
  p{
    flex: 1;
    display: inline-block;
    width: 30vw;

  }
  .right-1{
    width: 60vw;
     text-align: right;
    }*{
      margin: 0;
    }  .left-1{
    width: 60vw;
     text-align: left;
    } .right{
     text-align: right;
    }
}
</style>
