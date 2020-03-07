<template>
  <div id="app">
    <Header @showInfo="showInfo"></Header>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
    <div class="mask" v-if="myInfoVisible">
      <div class="myInfo">
        <span @click="myInfoVisible = false">x</span>
        <div>
          <span>name: Jianyang</span>
          <span>email: 876722066@qq.com</span>
          <span>wechat: abcljy012</span>
          <span>blog: </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'


  export default {
    name:'app',
    data(){
      return {
        myInfoVisible: false
      }
    },
    components: {
      Header,
    },
    methods: {
      showInfo(){
        this.myInfoVisible = true
      }
    }
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
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 999;
  .myInfo {
    position: relative;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -100px;
    width: 400px;
    height: 200px;
    background-color: #fff;
    padding-left: 20px;
    padding-top: 30px;

    > span {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, .5)
      }
      border: 1px solid #ddd;
      padding: 2px 8px;
    }
    > div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        display: inline-block;
        line-height: 35px;
      }
    }
  }
}
</style>
