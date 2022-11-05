<template>
  <div>
    <van-nav-bar title="地瓜数藏首页" />
   <br>
    <div class="lbt">
    <van-swipe :autoplay="2000" indicator-color="white">
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" class="pic"/>
  </van-swipe-item>
</van-swipe>
<hr>
<p>发售中心</p>

<indexComponent v-for="item in indexGoods" :key="item.img"
:price="item.price"
:name="item.name"
:img="item.pic"
:time="item.sell_Time"
@click.native="show(item.name)"
>

</indexComponent>
</div>
  </div>
</template>

<script>
import indexComponent from '@/components/indexComponents.vue'
import bus from '@/eventBus'
export default {
  setup () {
    const images = [
      'http://cugb760.afeiandld.top/xmpic/DMGY-1.jpg',
      'http://cugb760.afeiandld.top/xmpic/DMGY-2.jpg',
      'http://cugb760.afeiandld.top/xmpic/DMGY-3.jpg',
      'http://cugb760.afeiandld.top/xmpic/DMGY-4.jpg'

    ]
    return { images }
  },
  components: {
    indexComponent
  },
  data () {
    return {
      indexGoods: [],
      name: ''
    }
  },
  methods: {
    show (name) {
      this.name = name
      bus.$emit('state', { state: false, name: this.name })
      window.location.hash = '/getNew'
    }
  },
  async created () {
    const { data: res } = await this.$axios.get('/user/api/index')
    if (res.length !== 0) {
      this.indexGoods = res
    }
  },
  beforeDestroy () {

  }
}

</script>

<style lang="less" scoped>
.pic{
  width: 90vw;
  height: 15vh;
}
</style>
