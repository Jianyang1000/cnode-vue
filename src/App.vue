<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'


  export default {
    name:'app',
    components: {
      Header,
    },
  }


</script>
<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e1e1e1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #333;
}
.main {
  width: 73%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
}
</style>
