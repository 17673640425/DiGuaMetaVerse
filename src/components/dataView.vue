<template>
  <div>
    <div class="null"></div>
  <div class="text" style="background-color: white;width: 80vw;height: 20vh;">
                <a>数字身份账户信息</a>
                <p>{{id}}</p>
                <a>DiGuaVerse ID</a>
                <p>{{id}}</p>
  </div>
  <div class="text" style="background-color:white;width: 80vw;height: 25vh;">
                <a>用户名</a>
                <p>{{name}}</p>
                <a>头像</a>
                <p><img :src="'http://www.afeiandld.top/xmpic/'+pic" width=""></p>
  </div>
  <div class="text" style="background-color:white;width: 80vw;height: 30vh;">
                <a>手机号码</a>
                <p>{{phone}}</p>
                <a>密码</a>
                <p>*********</p>
                <a>身份证</a>
                <p>未实名认证</p>
  </div>
  <button style="color:white;width: 80vw;height: 5vh;background-color:rgb(255,0,0);" @click="logout">退出登录</button>
  <br>
  <br>
  <p>Version 1.0.0.1</p>
<p>Copyright@2022</p>
<p>湖南地瓜文化传媒有限公司版权所有</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0,
      name: '',
      pic: '1663613452848.jpg',
      phone: '123****8901'
    }
  },
  created () {
    this.pic = localStorage.getItem('pic')
    this.id = localStorage.getItem('token')
    this.name = localStorage.getItem('name')
    this.phone = this.hidephone(localStorage.getItem('phone'))
  },
  methods: {
    logout () {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('pic')
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('money')
      window.history.go(-1)
    },
    hidephone (str) {
      const res = str.slice(0, 3)
      const res1 = str.slice(7, 11)
      return res + '****' + res1
    }
  }
}
</script>

<style lang="less" scoped>
.text{
  margin: 4vh 10vw;
  margin-left: 9vw;
  border:2px solid grey;
  text-align: left;
  padding: 1vh 0 0 3vw;
}*{
  margin: 0;
}.null{
  width: 100vw;
  height: 7vh;

}a{
  font-size: 4vw;
  font-weight: bold;

}p{
  margin: 2vh;
}img{

  width:  7vh;
  height: 7vh;
}
</style>
