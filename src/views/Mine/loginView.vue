<template>
  <div >
    <van-nav-bar title="登录界面" />
    <p>DiGuaVerse</p>
<img src="@/img/DMGY.jpg">
    <div class="mid">

  <van-form @submit="onSubmit" >
  <van-cell-group inset>
    <van-field
      v-model="phonenumber"
      name="手机号码"
      label="手机号码"
      placeholder="手机号码"
      :rules="[{ required: true, message: '请填写手机号码' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" @click.prevent="check">
      提交
    </van-button>
  </div>
</van-form>
<p class="msg">{{msg}}</p>
<p>Version 1.0.0.1</p>
<p>Copyright@2022</p>
</div>
  </div>
</template>
<script>
import bus from '@/eventBus'
export default {
  data () {
    return {
      login: true,
      phonenumber: '',
      password: '',
      onSubmit: '',
      msg: ''
    }
  },
  methods: {
    async check () {
      const { data: res } = await this.$axios.post('/user/api/login',
        { phone: this.phonenumber, code: this.password })

      if (res.length !== 0) {
        localStorage.setItem('token', res[0].uid)
        localStorage.setItem('name', res[0].uname)
        localStorage.setItem('money', res[0].pocketmoney)
        localStorage.setItem('pic', res[0].photo)
        localStorage.setItem('phone', res[0].phone)
        bus.$emit('userInfo', res)
        window.location.reload('/mine')
      } else {
        this.msg = '手机号或者密码错误，登录失败！'
      }
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
img{
  width: 90vw;
  height: 20vh;
  margin-top: 0vh;
  margin-bottom: 2vh;
}.msg{
  color: red;
}body{
    touch-action: none;
   }
</style>
