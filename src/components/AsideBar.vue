<template>
  <div class="asideBar">
    <div class="title">作者</div>
    <div class="userInformation">
      <div class="baseInfo">
        <img :src="userInformation.avatar_url" alt="avatar" />
        <span class="loginname">{{userInformation.loginname}}</span>
      </div>
      <div class="userScore">积分: {{userInformation.score}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideBar",
  props: {},
  data() {
    return {
      userInformation: ""
    };
  },
  async created() {
    let userInformation = await this.$http.get(
      "https://cnodejs.org/api/v1/user/atian25"
    );
    this.userInformation = userInformation.data.data;
    console.log(userInformation)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.asideBar {
  width: 290px;
  background-color: #fff;
  text-align: left;
  height: 135px;
  border-radius: 3px;
  margin-left: 14px;
}
.title {
    padding: 10px;
    color: #444;
    border-radius: 3px;
    background-color: #f6f6f6;
    font-size: 13px;
}
.userInformation {
    padding: 10px;
    img {
        width: 48px;
        height: 48px;
    }
    .baseInfo {
        display: flex;
        align-items: center;
    }
    .loginname {
        color: #778087;
        font-size: 16px;
    }
    .userScore {
        padding: 10px 0;
        font-size: 14px;
    }
}
</style>
