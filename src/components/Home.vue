<template>
  <div id="home">
    <h3>home 路由</h3>
    <!--栅栏格-->
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">11</div></el-col>
    </el-row>

    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary" icon="el-icon-edit">主要按钮</el-button>
      <el-button type="success" :loading="true">成功按钮</el-button>
      <el-button type="info" size="medium" round>信息按钮</el-button>
      <el-button type="warning"><i class="el-icon-share"></i>警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>

    <el-radio-group v-model="radio2">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>

    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-switch
      v-model="value3"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>

    <!--axios 请求数据-->
    <el-button @click="getData">axios请求数据</el-button>
    <div>{{myMessage}}</div>


  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        myMessage:'默认数据',
        radio2: 3,
        value1:'',
        value2: null,
        value3: true,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    },
    mounted() {
      this.getData();
    },
    methods:{
      getData () {
        axios.get('http://dev.chinamobo.com:8088/enterpriseuniversity/services/api/getMethod?callback=angular.callbacks._f&apiName=LATEST_USER_LIST&userId=E00000014&token=d9fa55dc-e8a7-45e7-9a93-bfda53f0c465&apiType=global&time=1510308197572')
          .then(function (res) { //success
            console.log(res);
            this.myMessage = res.data;
          }.bind(this))
          .catch(function (err) { //fail
            console.log(err);
          }.bind(this));
      }
    }
  }
</script>

<style scoped lang="less">
  @color: #e5e9f2;
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: @color;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
