<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>


    <!--自定义全局组件，例如 加载动画 无数据显示-->
    <Loading></Loading>


    <div style="background-color: cornsilk">
    <div>路由跳转</div>
    <input type="button" value="添加一个路由" @click="push">
    <input type="button" value="替换一个路由" @click="replace">
    <!--<router-link to="/">Home</router-link>-->
    <router-link to="/home">Home</router-link>
    <router-link to="/hello">Hello</router-link>
    <router-link to="/user">User</router-link>
    <!-- router-view里边载入hello.vue 等路由组件-->
    <div>
      <transition enterActiveClass="animated zoomInLeft" leaveActiveClass="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </div>

    </div>

    <component-a></component-a>

      <!--我们分几个步骤来理解这段代码：<br>
      var Child = Vue.extend(...)定义一了个Child组件构造器<br>
      var Parent = Vue.extend(...)定义一个Parent组件构造器<br>
      components: { 'child-component': Child }，将Child组件注册到Parent组件，并将Child组件的标签设置为child-component。<br>
      template :'<p>This is a Parent component</p><child-component></child-component>'，在Parent组件内以标签的形式使用Child组件。<br>
      Vue.component('parent-component', Parent) 全局注册Parent组件<br>
      在页面中使用<parent-component>标签渲染Parent组件的内容，同时Child组件的内容也被渲染出来<br>-->

      <!--vuejs构建大型项目，作为一个框架来讲还缺失几块内容，除了 （组件化，数据双向绑定）
      vuejs组件化，
      数据和展现的双向绑定，
      数据层跟后台ajax数据交互（vue-resource库 组件用来加载资源发送http XMLHttpRequest请求等），
      单页面应用的路由功能 官方库vue-router,验证组件（表单验证），
      用于移动端开发使用的工具 vue-touch库，(用于移动端开发使用的工具，基于hammer.js wrapper for vue.js)
      大量使用组件，集中管理组件状态 Vuex库 (大规模状态管理)
      https://github.com/vuejs 可以查看github找到这些库来引用
      -->



    <!--<my-footer>
      内容分发 slot 在组合组件时，内容分发 API 是非常有用的机制。
      <slot> 元素可以用一个特殊的属性 name 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素
        仍然可以有一个匿名 slot，它是默认 slot，作为找不到匹配的内容片段的备用插槽。如果没有默认的 slot，这些找不到匹配的内容片段将被抛弃。
      <p slot="footer">这里有一些联系信息</p>
    </my-footer>-->
    <my-footer>
      <!--内容分发 slot 在组合组件时，内容分发 API 是非常有用的机制。
      <slot> 元素可以用一个特殊的属性 name 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素
        仍然可以有一个匿名 slot，它是默认 slot，作为找不到匹配的内容片段的备用插槽。如果没有默认的 slot，这些找不到匹配的内容片段将被抛弃。-->
        <template scope="props" slot="footer">
          <div>定义全局组件</div>
          <span>{{ props.text }}</span>
          <p>my-footer 是在main.js中定义的全局的组件，通过Vue.component('my-footer',{})</p>
        </template>
    </my-footer>
  </div>

</template>

<script>
  import router from './router'
import componentA from './components/componentA'
//  import { mapGetters, mapActions } from 'vuex'
export default {  //导出模块
  name: 'app',
  data (){
      return {
        msg: 'Welcome to Your Vue.js App'
      }
  },
  components:{componentA}, //将Child组件注册到Parent组件
  methods:{
      push:function () {
        router.push({path:'home'});
      },
      replace:function () {
        router.replace({path:'user'});
      }

  }
}

</script>

<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.myfooter,  .myfooter span,  .myfooter p{
  background-color: burlywood;
}
.router-link-exact-active{
  font-size: 18px;
  color: coral;
}


</style>
