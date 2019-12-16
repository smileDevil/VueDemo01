<template>
  <div class="users">
    <p>这里是users {{userid}}</p>
      <ul>
          <li v-for="(username,index) in sbqusers" :key="index">{{username}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
//   props:[
//       "sbqusers"
//   ],
props:{
    sbqusers:{
        type:Array
    }
},
computed: {
  userid(){
    return this.$route.params.userid
  }
},
  data() {
    return {
       
    }
},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    text-align: center;
}
</style>
