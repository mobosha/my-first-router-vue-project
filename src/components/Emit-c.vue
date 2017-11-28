<template>
  <div id="emitC" class="emitC">
    <h3>我是C组件</h3>
    c组件接受来自同级的A组件的数据 -> {{a}}
    <br>
    c组件接受来自同级的B组件的数据 -> {{b}}
  </div>
</template>

<script>
  import bus from '../assets/eventBus'
  // 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
  export default {
    name: 'emitC',
    data () {
      return {
        a:'默认值a',
        b:'默认值b'
      }
    },
    mounted(){
        //接受A组件数据
        var _this = this;
        bus.$on('a-msg',function(a){ //bus 是新的vue实例对象，所以里边对应的this跟外边的this不是一个对象
          _this.a = a;
        })
//        另一种写法
//        bus.$on('a-msg',function(a){ //bus 是新的vue实例对象，所以里边对应的this跟外边的this不是一个对象
//          this.a = a;
//        }.bind(this))

        //接受B组件数据
        bus.$on('b-msg',function (b) {
          this.b = b;
        }.bind(this))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
