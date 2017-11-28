import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

import mutations from './mutations'
import actions from './actions'

export default new VueX.Store({
  modules:{
    mutations
  },
  actions,

})
