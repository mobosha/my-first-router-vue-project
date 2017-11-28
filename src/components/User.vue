<template>
  <div id="user">
    <h3>我是用户信息</h3>
    <ul>
      <li><router-link to="/user/strive/age/10">strive</router-link></li>
      <li><router-link to="/user/blue/age/30">blue</router-link></li>
      <li><router-link to="/user/orange/age/60">orange</router-link></li>
    </ul>
    <div>
        <router-view></router-view>
    </div>

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
