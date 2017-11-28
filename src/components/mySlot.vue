<template>
    <div id="mySlot" class="s-slot">
        <h1>xxxxx</h1>
        <slot name="slot1"></slot>
        <p>welcome vue</p>
        <slot name="slot2"></slot>
    </div>
</template>

<script>
    export default {
    name:'mySlot',
    data () {
      return {

      }
    },
    methods:{

    },
     components: {

     }

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
  .s-slot{
    background-color: aqua;
  }
</style>
