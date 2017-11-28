import LoadingComponent from './loading.vue'

const Loading = {
  install: function (Vue) {
    Vue.component('Loading', LoadingComponent)   //第一个参数 插件名称，第二个参数 组件名称
  }
};

export default Loading
