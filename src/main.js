// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//vue2.0 版本  16kb min+gzip的运行大小
import Vue from 'vue'

//引入 element-ui
//import ElementUI from 'element-ui' //全部引入 element-ui
// import { Button, Row, Col, Radio, RadioGroup, DatePicker} from 'element-ui' //部分引入
//import 'element-ui/lib/theme-chalk/index.css' //引入element-ui 样式
// home.vue 组件使用element-ui 组件

//引入 mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// home1.vue 组件使用 mint-ui 组件

import App from './App'
import router from './router'

//自定义全局组件
import Loading from './components/loading/index'

//vuex单独引入assets、store.js
// import store from './assets/store'
//模块引入 components/store 文件夹
import store from './components/store/index'

//使用element-ui
// Vue.use(ElementUI)

// Vue.use(Button)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(DatePicker)

//使用 mint-ui
Vue.use(Mint)
//使用自定义全局组件
Vue.use(Loading)
//使用vuex
Vue.use(store)


Vue.config.productionTip = false
// Vue.config.keyCodes.ctrl = 17 //内置有不需要定义，vue2.0+ 内置键符号，包括 enter tab delete esc space up down left right ,在新增 ctrl alt shift meta

// 定义全局组件
Vue.component('my-footer', {
  template: '<span class="myfooter">全局注册组件实现在main.js， <slot name="footer" text="hello from child"></slot>如果我没猜错的话，你是在.vue（单文件组件）中加入的new Vue(),这样将会有俩个Vue实例，导致意外发生，建议你将全局组件、插件等都写到main.js中，挂载到一个Vue实例上，而.vue（单文件组件）采用 export default {} 的写法</span>',
  data: {
    message: 'hello'
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})// .$mount('#app')

