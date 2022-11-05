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
  <stuffDetai v-for="item in stuffList"
   :key="item.index"
   :price="item.price"
   :name="item.number"
   :img="'1663613452848.jpg'"
   ></stuffDetai>
  </div>
</template>

<script>
import stuffDetai from '@/components/stuffDetai'
export default {
  data () {
    return {
      titlename: '',
      top: true,
      stuffList: [1, 2, 3, 4, 5]
    }
  },
  async created () {
    if (this.id === '1') {
      this.titlename = '收藏中'
      const { data: res } = await this.$axios.post('/user/api/getstuff',
        {
          id: 0,
          uid: 10000
        })
      if (res.length !== 0) {
        this.stuffList = res
      } else {
        this.stuffList = [1, 2]
      }
    }
    if (this.id === '2') {
      this.titlename = '转售中'
      const { data: res } = await this.$axios.post('/user/api/getstuff',
        {
          id: 1,
          uid: 10000
        })
      if (res.length !== 0) {
        this.stuffList = res
      } else {
        this.stuffList = [1, 2]
      }
    }
    if (this.id === '3') {
      this.titlename = '已转售'
      const { data: res } = await this.$axios.post('/user/api/getsold',
        {
          uid: 10000
        })
      if (res.length !== 0) {
        this.stuffList = res
      } else {
        this.stuffList = [1, 2]
      }
    }
    console.log(this.stuffList)
  },
  props: ['id'],
  methods: {
    onClickLeft () {
      window.history.back()
    }
  },
  components: {
    stuffDetai
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
