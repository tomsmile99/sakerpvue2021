import { createStore } from 'vuex'
import http from '../services/AuthService'

export default createStore({
  state: {
    dataVersions : ""
  },
  mutations: {
    setVERSION(state, value) {
      state.dataVersions = value
    },
  },
  //ใช้ getters จะปลอดภัยกว่าการใช้ state แบบโดนตรง 
  getters:{
    getVERSION(state){
      return state.dataVersions
    }
  },
  actions: {
    addAction(context){
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
