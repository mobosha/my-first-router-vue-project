<template>
  <div class="loading-box">
    {{msg}}
  </div>
</template>
<script>
  export default{
      data(){
          return {
              msg: 'loading .... '
          }
      }
  }
</script>
<style>
  .loading-box{
      color:red;
      font-size: 40px;
  }
</style>
