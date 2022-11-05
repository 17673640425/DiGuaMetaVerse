<template>
  <div>
    <van-nav-bar
  :title="titlename"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  :fixed="top"
  />
  <div class="null"></div>
  <component :is="'orderView'" v-for="item in orderList"
   :key="item.index"
   :ordernumber="item.ordernumber"
   :price="item.price"
   :pic="item.price"
   :gid="item.gid"
   :name="item.price"
   :state="item.state"
   ></component>
   <div class="null"></div>
  </div>
</template>

<script>
import orderView from '@/components/orderComponents.vue'
export default {
  props: ['setting', 'id'],
  methods: {
    onClickLeft () {
      window.history.back()
    },
    orderfilter (statenum) {
      this.orderList = this.orderList.filter((item, index) => {
        return item.state === statenum
      })
    }
  },
  async created () {
    const { data: res } = await this.$axios.post('/user/api/getorder', { uid: localStorage.getItem('token') })
    if (res.length !== 0) {
      this.orderList = res
    } else {
      alert('系统正在维护中！！！！！')
    }
    if (this.id === '1') {
      this.titlename = '全部订单'
    }
    if (this.id === '2') {
      this.titlename = '待支付'
      this.orderfilter(1)
    }
    if (this.id === '3') {
      this.titlename = '已支付'
      this.orderfilter(2)
    }
    if (this.id === '4') {
      this.titlename = '已取消'
      this.orderfilter(0)
    }
  },
  data () {
    return {
      titlename: '',
      top: true,
      orderList: []
    }
  },
  components: {
    orderView
  }
}

</script>

<style lang="less" scoped>
*{
  margin: 0;
}.null{
  width: 100vw;
  height: 7vh;

}
</style>
