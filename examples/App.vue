<template>
    <div>
      <aform :items="items"></aform>
      <atable></atable>   
    </div>
</template>

<script>

export default {
  name: 'App',
    data () {
    return {
      items:[
        {name:"test",class:"t"},
        {name:"t1",class:"t2"}
      ]
    };
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
