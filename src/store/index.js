import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '../api/getData'

Vue.use(Vuex)

// 获取数据
const state = {
  adminInfo: {
    avatar: 'default.jpg'
  }
}

// 存储数据
const mutations = {
  saveAdminInfo (state, adminInfo) {
    state.adminInfo = adminInfo
  }
}

// 提交数据
const actions = {
  async getAdminData ({commit}) {
    try {
      const res = await getAdminInfo()
      if (res.status === 1) {
        commit('saveAdminInfo', res.data)
      } else {
        throw new Error(res)
      }
    } catch (error) {
      console.log('您尚未登陆或者session失效')
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
