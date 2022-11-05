import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/Index/indexView.vue'
import market from '@/views/Market/marketView.vue'
import mine from '@/views/Mine/mineView.vue'
import getNew from '@/views/Index/getNew.vue'
import setting from '@/views/Mine/MineDetai/settingView.vue'
import stuff from '@/views/Mine/MineDetai/stuffView.vue'
import order from '@/views/Mine/MineDetai/orderView.vue'
import pay from '@/views/Market/payView.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/market',
    name: 'market',
    component: market
  }, {
    path: '/mine',
    name: 'mine',
    component: mine
  }, {
    path: '/getNew',
    name: 'getNew',
    component: getNew
  }, {
    path: '/setting/:id',
    name: 'setting',
    component: setting,
    props: true
  }, {
    path: '/stuff/:id',
    name: 'stuff',
    component: stuff,
    props: true
  }, {
    path: '/order/:id',
    name: 'order',
    component: order,
    props: true
  }, {
    path: '/pay',
    name: 'pay',
    component: pay
  }
]

const router = new VueRouter({
  routes
})

export default router
