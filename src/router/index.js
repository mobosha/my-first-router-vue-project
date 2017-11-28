import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home1 from '@/components/Home1'
import Hello from '@/components/Hello'
import User from '@/components/User'
import UserDetail from '@/components/UserDetail'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',  //小写，默认打开
    //   name: 'Home', //大写
    //   component: Home  //大写
    // },
    {
      path: '/home',  //小写
      name: 'Home', //大写
      component: Home1  //大写
    },{
      path: '/hello',  //小写
      name: 'Hello', //大写
      component: Hello  //大写
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children:[
        {path:':username/age/:age', component: UserDetail}
      ]
    },
    {
      path: '*', //路由重定向，所有的找不到路由都会跳转到这个页面，也可以定义  404
      redirect:'/home'
    }
  ]
})
