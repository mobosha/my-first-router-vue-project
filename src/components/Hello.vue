<template>
  <div id="hello" class="hello">
    <h3>使用vuex</h3>

    <div>
      <input type="button" value="增加" @click="increment">
      <input type="button" value="减少" @click="decrement">
      <input type="button" value="偶数点击+" @click="clickOdd">
      <input type="button" value="异步async" @click="clickAsync">
      现在数字为：{{count}},当前数是{{getOdd}}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions  } from 'vuex'
// 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods: mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
