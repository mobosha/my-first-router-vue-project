<template>
  <div id="emitB" class="emitB">
      <span>我是B组件</span>
      <input type="button" value="把B数据给C" @click="send">
      <input type="text" value="通过enter键盘事件，把B数据给C" @keyup.enter="send">
  </div>
</template>

<script>
  import bus from '../assets/eventBus'

  // 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
  export default {
    name: 'emitB',
    data () {
      return {
        a:'我是b数据'
      }
    },
    methods:{
        send:function () {
            bus.$emit('b-msg',this.a);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
