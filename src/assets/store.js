/**
 * Created by sss on 2017/11/14.
 */
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

var state = {
  count: 10
}

const mutations = {  //处理状态（数据）变化
  increment(state){
    state.count++;
  },
  decrement(state){
    state.count--;
  }
};

const actions = {  //处理你要干什么，异步请求，判断，流程控制
  increment:({commit})=>{
    commit('increment')
  },
  decrement:({commit})=>{
    commit('decrement')
  },
  clickOdd:({commit,state})=>{
    if(state.count%2 == 0){
      commit('increment');
    }
  },
  clickAsync:({commit})=>{
    new Promise(()=>{
      setTimeout(function () {
        commit('increment');
      },1000)
    })
  }
};

const getters = {  //
  count(state){
    return state.count;
  },
  getOdd(state){
    return state.count%2==0?"偶数":"奇数";
  }
}


//需要导出store对象
export default new VueX.Store({
  state,
  mutations,
  actions,
  getters
});


