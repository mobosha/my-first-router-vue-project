<!-- var Child = Vue.extend(...)定义一了个Child组件构造器,但是vue2.0基本上不用啦 -->
<template>
  <div id="componentA" class="componentA">


    <h1>{{ msg }}</h1>
    <button @click="onClickMe">click!</button>
    <div style="background-color: aquamarine">
    <div>父子组件通信</div>
    <!--子组件向父组件传递数据-->
    <p>child tells me: {{childWords}}</p>
    <!--绑定data变量形式，传递字符串到子组件child中-->
    <child :msgfromfather="msgfromfather" @child-tell-me-something="listenToMyBoy"></child>
    <!--缩写形式，使用 v-bind 的缩写语法通常更简单-->
    <!--<child :msgfromfather="msgfromfather" v-on:child-tell-me-something="listenToMyBoy"></child> -->
    <!--直接传递字符串到子组件child中-->
    <!--<child msgfromfather="msg from father to child via props" v-on:child-tell-me-something="listenToMyBoy"></child>-->
    </div>


    <!--<my-footer></my-footer>-->

    <!--slot占位置-->
    <myslot>
        <h3 slot="slot1">slot 占位置,此处就是通过在子组件中声明slot 展示这块内容，否则被覆盖</h3>
        <!--此处h3内容已经被 myslot内容覆盖，解决方法 slot 放到myslot组件中-->
        <h4 slot="slot2">两个单独的内容区分各自放在哪个位置 通过声明 slot属性 slot='名称'</h4>
    </myslot>


    <!--组件通信-同级-->
    <div style="background-color: cadetblue">
    <div>同级组件通信</div>
    <emitA></emitA>
    <emitB></emitB>
    <emitC></emitC>
    </div>


    <!--自定义全局组件，例如 加载动画 无数据显示-->
    <Loading></Loading>








  </div>
</template>

<script>
import Vue from 'vue'
import child from './child'
import myslot from './mySlot'
import emitA from './Emit-a.vue'
import emitB from './Emit-b.vue'
import emitC from './Emit-c.vue'
export default {
  name:'componentA',
  data () {
    return {
      msg: 'Hello form conponent a!',
      msgfromfather: "msg from father to child via props",
      childWords: ''
    }
  },
  // events:{
  //   'child-tell-me-something':function(msg){
  //     this.childWords = msg;
  //   }
  // },  //暂时不清楚能不能用events  替换方法:http://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced
  methods:{
      onClickMe:function(){
          console.log('aa');
      },
      listenToMyBoy:function(msg){
        this.childWords = msg;
      }
  },
  components:{child, myslot, emitA, emitB, emitC}  //局部注册child组件
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
