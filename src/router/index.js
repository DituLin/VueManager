import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const manager = r => require.ensure([], () => r(require('@/pages/manager')), 'manager')
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const addShop = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const addGoods = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const userList = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const shopList = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const foodList = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const orderList = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const adminList = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const visitor = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const newMember = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const uploadImg = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const vueEdit = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const adminSet = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const sendMessage = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const explain = r => require.ensure([], () => r(require('@/pages/home')), 'home')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/manager',
    component: manager,
    name: '',
    children: [{
      path: '',
      component: home,
      meta: []
    }, {
      path: '/addShop',
      component: addShop,
      meta: ['添加数据', '添加商铺']
    }, {
      path: '/addGoods',
      component: addGoods,
      meta: ['添加数据', '添加商品']
    }, {
      path: '/userList',
      component: userList,
      meta: ['数据管理', '用户列表']
    }, {
      path: '/shopList',
      component: shopList,
      meta: ['数据管理', '商家列表']
    }, {
      path: '/foodList',
      component: foodList,
      meta: ['数据管理', '食品列表']
    }, {
      path: '/orderList',
      component: orderList,
      meta: ['数据管理', '订单列表']
    }, {
      path: '/adminList',
      component: adminList,
      meta: ['数据管理', '管理员列表']
    }, {
      path: '/visitor',
      component: visitor,
      meta: ['图表', '用户分布']
    }, {
      path: '/newMember',
      component: newMember,
      meta: ['图表', '用户数据']
    }, {
      path: '/uploadImg',
      component: uploadImg,
      meta: ['文本编辑', 'MarkDown']
    }, {
      path: '/vueEdit',
      component: vueEdit,
      meta: ['编辑', '文本编辑']
    }, {
      path: '/adminSet',
      component: adminSet,
      meta: ['设置', '管理员设置']
    }, {
      path: '/sendMessage',
      component: sendMessage,
      meta: ['设置', '发送通知']
    }, {
      path: '/explain',
      component: explain,
      meta: ['说明', '说明']
    }]
  }
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
