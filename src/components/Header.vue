<template>
  <div class="header">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          title:"耍不耍宝可梦剑盾剑盾?"
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    background: lightgreen;
    padding: 10px;
}

h1{
    color: #222;
    text-align: center;
}
</style>
