<template>

<div>
    <van-nav-bar
  :title="indexGoods.name"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"/>
<br>
<div class="box">
    <div class="pic">   <img :src="'http://cugb760.afeiandld.top/xmpic/'+indexGoods.pic" alt=""></div>
                <a style="display: block;color: orange;">太阳虫 「太阳虫艺术馆」</a>
                <a>{{indexGoods.name}}</a>
                <p v-if="state">价格:{{val.price}}积点</p>
                <div class="text" style="background-color: RGB(245, 245, 245);width: 90vw;height: 6vh; border: 1vw solid #ddd; border-radius: 10px;">
                <p>总发行量：{{indexGoods.sum}} 份</p>
                <p>已领取：{{indexGoods.sold}}份</p>
                </div>
                <br>
               <div class="text" style="background-color: RGB(245, 245, 245);width: 90vw;height: 13vh; border: 1vw solid #ddd; border-radius: 10px;">
               <h3>发行信息</h3>
               <p>藏品描述: <a>{{indexGoods.description}}</a></p>
               <p>发行方:<a>「地瓜数藏」</a></p>
               <p>发行时间:<a>{{indexGoods.sell_Time|dateFormat}}</a></p>
               </div>
               <br>
            <div class="text" style="background-color: RGB(245, 245, 245);width: 90vw;height: 10vh; border: 1vw solid #ddd; border-radius: 10px;">
              <h3>技术信息</h3>
              <p>链上地址:<a>{{100000+indexGoods.cid}}</a></p>
              <p>合约地址:<a>售卖结束后上链</a></p>
            </div>
           <br>
           <div class="text" style="background-color: RGB(245, 245, 245);width: 90vw;height: 23vh; border: 1vw solid #ddd; border-radius: 10px;">
           <h3>购买须知</h3>
           <a>地瓜数藏平台发行数字藏品为虚拟物品，仅限实名认证</a>
           <a>且年满18周岁的用户购买。平台发行的数字藏品版权归</a>
           <a>发行方或创作者所有，未经授权不得用于任何商业用途</a>
           <a>该商品一经出售，不支持退换。数字藏品不支持任何形</a>
           <a>式的恶意炒作及非法使用。</a>
            </div>
              <div style="position:fixed;bottom:0;z-index: 9999;">

        <input type="button" @click="getUrl" :value="func" style="color:white;width: 100vw;height: 7vh;background-color:rgb(255,0,0);">
                       </div>
</div>
  </div>

</template>

<script>

export default {
  methods: {
    onClickLeft () {
      window.history.back()
    },
    getUrl () {

    },
    getNew () {
      window.location.hash = '/pay'
    },
    async buyStuff () {
      const ordernumber = Date.now()
      const { data: res } = await this.$axios.post('/user/api/buystuff', {
        number: this.ordernumber,
        buy: localStorage.getItem('token'),
        goodsid: this.indexGoods.cid,
        identifier: this.val.cid,
        price: this.val.price
      })
      console.log(res)
      if (res.state === 1) {
        window.location.hash = '/pay/' + ordernumber
      }
    }
  },
  data () {
    return {
      indexGoods: {},
      state: true,
      func: '',
      name: ''
    }
  },
  props: ['val'],
  components: {
  },
  async created () {
    this.state = this.val.state
    this.func = this.val.state ? '购买藏品' : '收藏藏品'
    this.getUrl = this.val.state ? this.buyStuff : this.getNew
    this.name = this.val.name
    const { data: res } = await this.$axios.post('/user/api/indexComponent', { name: this.name })
    if (res.length !== 0) {
      this.indexGoods = res[0]
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
}img{
  margin: 0;
  width: 80vw;
  height: 80vw;
}.box{
.text{
  margin-left: 4vw;
}
}
</style>
