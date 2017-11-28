<template>
  <div id="child" class="child">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickMe">open mouse!(点击子组件传递数据到父组件)</button>
    <table>
        <tr>
            <th colspan="3">父组件数据 - ></th>
            <th colspan="3" v-text="fatherDatafromChild">父组件数据</th>
        </tr>
        <tr>
            <td>name</td>
            <td v-cloak>{{ name }}</td>
            <td><input type="text" v-model="name"  /></td>
        </tr>
        <tr>
            <td>age</td>
            <td>{{ age }}</td>
            <td><input type="text" v-model="age" /></td>
        </tr>
    </table>
    <!--<my-table v-bind:my-name.sync="name" v-bind:my-age.sync="age" @update:myAge="get"></my-table>-->
    <!--update:myAge 是监测子组件传递父组件数据的事件-->
    <my-table :my-name.sync="name" :my-age.sync="age" @update:myAge="get"></my-table>
    <!--<div v-demo="{ color: age, text: 'hello!' }" ></div>-->
    <div style="background-color: aqua">
    <div>自定义指令</div>
    <div v-demo="age" ></div>
    <div v-demo-directive:red="message"></div>
    </div>
    <div style="background-color: #42b983">
    <div>内置指令</div>
    <ul>
      <li v-for="(value, key) in data" v-bind:key="value.id">{{value.id}}-{{value.text}}</li>
    </ul>
s
    <!--v-text：更新元素的textContent-->
    <span v-text="text"></span>
    <!-- same as -->
    <span>{{text}}</span>

    <!--v-html：更新元素的innerHTML。如果想要复用模板，则应当使用partials, v-html带有编译功能，可以编译内容区域如果有html 就转化成 -->
    <span v-html="html"></span>
    <!-- same as -->
    <span>{{html}}</span>

    <span ref:msg @click="vEl()">hello, v1.0版本指令
      v-el:为DOM元素注册一个索引，方便通过所属实例的$els访问这个元素，可以用v-el:some-el设置this.$els.someEL,
      通过this.$els获取相应的DOM元素
      this.$els.msg.textContent
      this.$els.otherMsg.textContent
    </span>
    <span ref:other-msg>world</span>

    <div v-bind="{id:someProp,'OTHERAttr':otherProp}">
      v-bind 指令的使用方式,
      编译出来的结果如下
      <div data-v-6171f65f="" id="idName" otherattr="prop">v-bind 指令的使用方式</div>
    </div>

    <div v-pre>
      跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
      {{age}}
      {{ this will not be compiled }}
      适合纯文本没有待变异字段元素
    </div>
    <div v-once>
      只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能
      This will never change: {{age}}   即使age 在input中被修改了也不会改变。适合渲染一次不会改变的数据
    </div>

    <div v-cloak>
      和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕，不会显示，直到编译结束。
      {{ message }}
    </div>
    </div>

    <div style="background-color: burlywood">
    <div>动画</div>
    <!--动画-->
    <input type="button" value="点击显示隐藏" @click="show=!show">
    <transition name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-show="show"></p>
    </transition>

    <br>
    <!--动画配合animate.css使用-->
    <input type="button" value="点击显示隐藏animate.css" @click="bSign=!bSign">
    <transition enterActiveClass=" zoomInLeft" leaveActiveClass=" zoomOutRight">
      <p v-show="bSign" class="animated"></p>
    </transition>
    <br>
    <!--嵌套动画-->
    <input type="button" value="点击显示隐藏animate.css+ 多个嵌套" @click="bShow=!bShow">
    <transition-group enterActiveClass=" zoomInLeft" leaveActiveClass=" zoomOutRight">
      <p v-show="bShow" class="animated" :key="1"></p>
      <p v-show="bShow" class="animated" :key="2"></p>
    </transition-group>
    <br>
    <!--动画 for循环-->
    <span>请在输入框输入 p </span>
    <input type="text" v-model="search">
    <transition-group enterActiveClass=" zoomInLeft" leaveActiveClass=" zoomOutRight">
      <p v-show="search" v-for="(val, index) in lists" class="animated" :key="index">{{val}}</p>
    </transition-group>
    </div>






  </div>
</template>

<script>
// import Vue from 'vue'
import myTable from './table'
import '../assets/animate.css'
export default {
  name: 'child',
  data () {
    return {
      msg: 'Hello form child conponent a!',
      name: '孙沙沙',
      age: 20,
      message: 'hello!',
      someProp : 'idName',
      otherProp : 'prop',
      text: '<b>text</b>',
      html: '<b>html</b>',
      data: [{id: 4, text:'cc'},{id: 2, text:'bb'},{id: 1, text:'aa'},{id: 3, text: 'dd'}, {id:0,text:'ee'}],
      fatherDatafromChild:'父组件数据1',
      show:false,
      bSign: false,
      bShow:false,
      bHide: false,
      search: '',
      list: ['apple','orange','pear']

    }
  },
  computed:{
      lists:function () {
          var arr = [];
          this.list.forEach(function(val,index){
            if(val.indexOf(this.search) != -1){
                arr.push(val);
            }
          }.bind(this))
        return arr;
      }
  },
  props: ['msgfromfather'],  //子组件需要通过props注册我接受这个属性，从父组件接收 。
  // prop默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态
  methods: {
      onClickMe: function(){
          console.log(this.msgfromfather);
          console.log(this.age) // => "white"
          this.$emit('child-tell-me-something', this.msg);
          // 不能用 $on 侦听子组件抛出的事件，而必须在模板里直接用 v-on 绑定，就像以下的例子：
          //子组件向父组件传递数据方法：通过$emit来实现（其中一个方法），还有其他方法
          //$emit在父母与其直接子女之间进行沟通,您可以从中听到$emit一个孩子v-on。这样可以让事件的便利性加上明确的内容
          //当在遥远的后裔/祖先之间进行沟通时，$emit不会帮助你。相反，最简单的升级就是使用集中的事件集线器。这有额外的好处，允许您在组件之间进行通信，无论它们在组件树中 - 甚至兄弟之间！因为Vue实例实现事件发射器接口，所以实际上可以使用一个空的Vue实例来实现这个目的。
          //this.$dispatch('child-tell-me-something', this.msg); //可惜的事vue 2.0 不支持这两个方法了，只有emit 和 on ；向父元素派发事件 ，同上边的$emit一样，但是父元素接收事件需要通过event 不是 v-on:child-tell-me-something="listenToMyBoy"
      },
      vEl: function () {
          alert(this.$refs)
          console.log(this.$refs)
      },
      get: function(dataFormChild){
          this.fatherDatafromChild = dataFormChild;
      },
      beforeEnter: function(el){
          console.log('动画进入之前beforeEnter')
      },
      enter: function(el){
        console.log('动画进入Enter')
      },
      afterEnter: function(el){
        console.log('动画进入之后Enter');
        el.style.backgroundColor = 'blue';
      },
      beforeLeave: function(el){
        console.log('动画离开之前beforeLeave')
      },
      leave: function(el){
        console.log('动画离开leave')
      },
      afterLeave: function(el){
        console.log('动画离开之后afterLeave');
        el.style.backgroundColor = 'red';
      }
  },
//  transitions:{ v2.0版本废弃
//      bounce:{
//          enterClass:'zoomInLeft',
//          leaveClass:'zoomOutRight'
//      }
//  },
  directives:{
    demo:{
      isLiteral: true,
      bind: function (el, binding) {
          console.log(binding.value)
          console.log(binding.value.color)
          console.log(binding.value.text)
      },
      unbind: function (el){ //不知道什么时候触发
          console.log('unbind')
      }
    },
    demoDirective: {
      bind: function(el, binding, vnode){
        el.style.color = '#fff'
        el.style.backgroundColor = binding.arg
        el.innerHTML =
          '指令名name - '       + binding.name + '<br>' +
          '指令绑定值value - '      + binding.value + '<br>' +
          '指令绑定表达式expression - ' + binding.expression + '<br>' +
          '传入指令的参数argument - '   + binding.arg + '<br>'
      }
    }


  },
   components:{myTable}
}

// 全局注册组件，但是前提是需要引入 import Vue from 'vue'
// Vue.component('my-table', {
//   template: '<span>sflsjflsfjls</span>',
//   data: {
//     message: 'hello'
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "animate.css"*/
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

  /*动画*/
  p{
    width: 150px;
    height: 150px;
    background-color: red;
    margin: 0 auto;
  }
  /*下边css样式跟自定义样式有关系，跟 animate.css 动画无关*/
  .fade-enter-active, .fade-leave-active{
    transition: 1s all ease;
  }
  .fade-enter-active{
    opacity: 1;
    width: 150px;
    height:150px;
  }

  .fade-leave-active{
    opacity: 0;
    width:100px;
    height: 100px;
  }
  /*实际上.fade-leave 不起作用，但是最好定义*/
  .fade-enter, .fade-leave{
    opacity: 0;
    width:100px;
    height: 100px;
  }
</style>
