<template>
  <div id="userDetail">
    用户详情 - > {{$route.params}} -- {{$route.query}} -- {{$route.query}}  -- {{$route.path}} -- {{$route.fullPath}} -- {{$route.name}}
  </div>
</template>
<script>

</script>
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
