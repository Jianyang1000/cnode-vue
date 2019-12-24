<template>
  <div>
    <div class="sideBar">
      <div class="title">作者</div>
      <div class="sideBarInformation">
        <div class="baseInfo">
          <router-link :to="{name:'userInfo',params:{name:this.user.loginname}}">
            <img :src="user.avatar_url" alt="avatar" />
            <span class="loginName">{{user.loginname}}</span>
          </router-link>
        </div>
        <div class="userScore">积分: {{user.score}}</div>
      </div>
    </div>
    <div class="otherTopic sideBar">
      <div class="title">作者其他话题</div>
      <div class="sideBarInformation">
        <ul>
          <li v-for="list in recent_replies" :key="list.id">
            <router-link :to="{name:'article',params:{id:list.id,name:list.author.loginname}}">
              {{list.title}}
            </router-link>
          </li>
          <li v-if="recent_replies.length === 0">
            无
          </li>
        </ul>
      </div>
    </div>
    <div class="noReplyTopic sideBar">
      <div class="title">无人回复的话题</div>
      <div class="sideBarInformation">
        <ul>
          <li v-for="list in recent_topics" :key="list.id" @click="getData">
            <router-link :to="{name:'article',params:{id:list.id,name:list.author.loginname}}">
              {{list.title}}
            </router-link>
          </li>
          <li v-if="recent_topics.length === 0">
            无
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "asideBar",
  props: {},
  data() {
    return {
      user: ""
    };
  },
  methods: {
    getData(){
      this.$http.get('https:/cnodejs.org/api/v1/user/' + this.$route.params.name
      ).then(user => this.user = user.data.data)
       .catch(error => console.log(error))
    }
  },
  computed: {
   recent_topics(){
     return (this.user.recent_topics || '').slice(0,5)
   },
    recent_replies(){
     return (this.user.recent_replies || '').slice(0,5)
    }
  },
  beforeMount() {
   this.getData()
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sideBar {
  width: 290px;
  background-color: #fff;
  text-align: left;
  border-radius: 3px;
  margin-left: 14px;
  margin-bottom: 14px;
  .title {
    padding: 10px;
    color: #444;
    border-radius: 3px;
    background-color: #f6f6f6;
    font-size: 13px;
  }
  .sideBarInformation {
    padding: 10px;
    font-size:14px;
    color: #778087;
    img {
      width: 48px;
      height: 48px;
    }
    .baseInfo > a{
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }

    }
    .loginName {
      color: #778087;
      font-size: 16px;
    }
    .userScore {
      padding: 10px 0;
      font-size: 14px;
    }
    li {
      list-style: none;
      line-height: 30px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      a {
        font-size:14px;
        color: #778087;
      }
    }
  }
}


</style>
