import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shopcar from '../views/Shopcar.vue'
import Users from '../components/Users.vue'
const HomeNews = () => import('../views/HomeNews.vue')
const HomeMessages = () => import('../views/HomeMessages.vue')
//1通过Vu.use(插件),安装插件
Vue.use(VueRouter)

// 配置所有路由
const routes = [
  { 
    path:"/",
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:"首页"
    },
    children:[
      {
        path:'news',
        component:HomeNews,
      },
      {
        path:'messages',
        component:HomeMessages,
      }
    ]
  },
  { 
    path:"/shopcar",
    name:"shopcar",
    meta:{
      title:"购物车"
    },
    component:Shopcar,
  }
  ,
  {
    path:'/users/:userid',
    name:'users',
    component:Users,
    meta:{
      title:"用户"
    },
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:"关于"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//路由懒加载
  }
]
// 创建VueROute对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})

//将router对象传入到Vue实例
export default router
