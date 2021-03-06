import { createStore } from 'vuex'
import http from '../services/AuthService'

export default createStore({
  state: {
    dataVersions : "",
    showMenu: false
  },
  mutations: {
    setVERSION(state, value) {
      state.dataVersions = value
    },
    toggleMenu(state){
      state.showMenu = !state.showMenu
    }
  },
  //ใช้ getters จะปลอดภัยกว่าการใช้ state แบบโดนตรง 
  getters:{
    getVERSION(state){
      return state.dataVersions
    }
  },
  actions: {
    //api get version ระบบ
    showVersion(context){
        http.get('versions').then(res => {
          context.commit('setVERSION', res.data.appVS_name)
        }).catch(error => {
              throw new Error(`API ${error}`);
        });
    }
  },
  modules: {

  },
  
})
