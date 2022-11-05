<template>
  <div>
    <van-pull-refresh v-model="loading" success-text="刷新成功" @refresh="onRefresh">
    <van-nav-bar title="市场" />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div>
      <hr/>
      <goodsView :price="good.price"
      :time="good.time"
      :name="good.goods.name"
      :pic="good.goods.pic"
      :sum="good.goods.sum"
      :cid="good.cid"
      v-for="good in marketInfo"
      :key="good.uid">

      </goodsView>
    </div>
  </van-pull-refresh>
  </div>
</template>

<script>
import goodsView from '@/components/goodsView'
import { ref } from 'vue'
import { Toast } from 'vant'
export default {
  data () {
    return {
      active: 0,
      login: false,
      marketInfo: [],
      value: ''
    }
  },
  components: {
    goodsView
  },
  methods: {

  },
  setup () {
    const count = ref(0)
    const loading = ref(false)
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功')
        loading.value = false
      }, 1000)
    }

    return {
      count,
      loading,
      onRefresh
    }
  },
  async created () {
    const { data: res } = await this.$axios.get('/user/api/market')
    if (res.length !== 0) {
      this.marketInfo = res
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
