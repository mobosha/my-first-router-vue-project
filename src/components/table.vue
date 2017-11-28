<template>
  <div id="table">
  <!--prop的绑定类型，双向绑定（v-bind:my-name.sync="name"），单项绑定（v-bind:my-name="name"）-->
    <table>
        <tr>
            <th colspan="3">子组件数据</th>
        </tr>
        <tr>
            <td>my name</td>
            <td>名字字段字母转化小写+去除空格{{ normalizedName }}</td>
            <td><input type="text" v-model="myName" v-focus="{ color: 'white', text: 'hello!' }" /></td>
        </tr>
        <tr>
            <td>my age</td>
            <td>{{ myAge }}</td>
            <td><input type="text" v-model="myAge" v-on:keyup="typeAge" /></td>
        </tr>
      <tr colspan="3"><input type="button" value="子组件传递数据到父组件" @click="typeAge"></tr>
    </table>
    <!--<foo></foo>
    <hr>
    <bar></bar>-->
  </div>
</template>

<script>
// import Vue from 'vue'
// // 注册一个空的 Vue 实例，作为 ‘中转站’
// var eventBus = new Vue({})
// // foo 组件
// var foo = {
//     template: '<div><p>the count of foo is {{fooCount}}</p>' +
//                 '<button @click="addBar">add bar\'s count</button></div>',
//     data: function() {
//         return {
//             fooCount: 0
//         }
//     },
//     methods: {
//         addBar: function() {
//             // 触发事件
//             eventBus.$emit('addBar')
//         }
//     },
//     mounted: function() {
//         eventBus.$on('addFoo', function(num) {
//             this.fooCount +=num
//         }.bind(this))
//         // 这里必须将 this 绑定在组件实例上。如果不使用 bind , 也可以使用箭头函数。
//     }
// }
// // bar 组件
// var bar = {
//     template: '<div><p>the count of bar is {{barCount}}</p>' +
//                 '<button @click="addFoo">add foo\'s count</button></div>',
//     data: function() {
//         return {
//             barCount: 0
//         }
//     },
//     methods: {
//         addFoo: function() {
//             // 触发事件，同时传递一个参数
//             eventBus.$emit('addFoo', 2)
//         }
//     },
//     // 在 组件创建的钩子函数中 监听事件
//     mounted: function() {
//         eventBus.$on('addBar', function() {
//             this.barCount++
//         }.bind(this))
//     }
// }

export default {
    name:'table',
    data () {
      return {

      }
  },
  props: ['myName','myAge'], //子组件需要通过props注册我接受这个属性，从父组件接收 。
  // prop默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态
  methods:{
    typeAge:function(){
      console.log(typeof this.myAge);
      this.$emit('update:myAge', this.myAge); //.sync修饰符 进行『双向绑定』,当子组件需要更新 （父组件值）foo 的值时，它需要显式地触发一个更新事件：
    }
  },
  computed:{
    normalizedName: function(){
      return this.myName.trim().toLowerCase();
    }
  },
  directives:{
      focus:  function (el, binding) {
            console.log(binding)
            console.log(binding.value)
//          console.log(oldVnode)
            el.focus();
        }
      }

  // components: {
  //       foo,
  //       bar
  //   }

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
