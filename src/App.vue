<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <Header/>
    <Users :sbqusers = "users"/>
    <Footer/> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/shopcar" >shopcar</router-link>
      <router-link :to="'/users/'+userid">users</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Users from '@/components/Users';
export default {
  data() {
    return {
       users:["x1","x2","x3"],
       userid:"zhangsan"

    }
  },
  components:{
    "Header":Header,
    "Footer":Footer,
    "Users":Users
  }
}
</script>

<style>
body{margin:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
