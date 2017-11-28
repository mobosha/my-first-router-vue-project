<template>
  <div id="home1">
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
      <mt-radio
        title="单选框列表"
        v-model="value"
        :options="['男', '女', '其他']">
      </mt-radio>

      <mt-cell title="标题文字">{{value}}</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="page-swipe">
          <mt-swipe :auto="4000">
            <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
            <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
            <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
          </mt-swipe>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(val, index) in 6" :title="'选项 ' + index" :key="index"/>
      </mt-tab-container-item>
    </mt-tab-container>



    <mt-button type="default" @click="open">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/images/100x100.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/images/100x100.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/images/100x100.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/images/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script>
  import { Indicator } from 'mint-ui';
export default{
   data(){
    return {
      selected: '1',
      value: '女'
    }
  },
  methods:{
    handleClose:function () {
      console.log("关闭");
    },
    open: function () {
      Indicator.open();
      setTimeout(()=>{
        Indicator.close();
      },2000)
    }
  }

}
</script>
<style>

  .page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .page-swipe .mint-swipe-item {
    line-height: 200px;
  }
  .page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }
</style>
