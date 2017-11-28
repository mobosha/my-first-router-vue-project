<template>
  <div id="emitA" class="emitA">
      <span>我是A组件</span>
      <input type="button" value="把A数据给C" @click="send">
  </div>
</template>

<script>
  import bus from '../assets/eventBus'
  // 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
  export default {
    name: 'emitA',
    data () {
      return {
        a:'我是a数据'
      }
    },
    methods:{
        send(){
          bus.$emit('a-msg',this.a);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
