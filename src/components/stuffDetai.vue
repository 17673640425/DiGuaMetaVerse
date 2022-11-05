<template>
  <div>
   <div class="box">
   <div class="img">
   <img  :src="'http://cugb760.afeiandld.top/xmpic/'+img" alt="">
   </div>
   <div class="introduction">
   <p>藏品名称：{{name}}</p> <p>地瓜数藏</p>
   <p>价格：￥{{price}}</p>
   </div>
   </div>
   <hr>
  </div>
</template>

<script>
export default {
  props: ['img', 'name', 'price']
}
</script>

<style lang="less" scoped>

</style>
