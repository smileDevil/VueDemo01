<template>
  <div class="home">
    <Header/>
    <img alt="Vue logo" src="../assets/logo.png">
    
    <router-link  to="/home/news">新闻</router-link>
    <router-link  to="/home/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from "@/components/Header";
// import Footer from '@/components/Footer';
export default {
  name: 'home',
  components: {
   "helloword" : HelloWorld,
  //  "Header":Header
  }
}
</script>
