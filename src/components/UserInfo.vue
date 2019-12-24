<template>
  <div class="userInfoWrap">
    <div class="userInfo">
      <div class="title">主页 /</div>
      <div class="content">
        <div class="baseInfo">
          <img :src="user.avatar_url" alt="user_image">
          <span>{{user.loginname}}</span>
        </div>
        <div class="score">
          {{user.score}}积分
        </div>
        <div class="otherInfo">
          <ul>
            <li></li>
          </ul>
        </div>
        <p>注册时间　{{ changeTime(user.create_at)}}　</p>
      </div>
    </div>
    <div class="recentCreateTopics">
      <div class="title">最近创建的话题</div>
      <div class="content">
        <ul>
          <li v-for="list in user.recent_topics && user.recent_topics.slice(0,10)" :key="list.id">

            <a href="#" class="cell_time">{{changeTime(list.create_at)}}</a>
            <router-link class="list_title" :to="{name:'article',params:{id:list.id,name:list.author.loginname}}">
              <img :src="list.author.avatar_url" alt="user_image" />
              {{list.title}}

            </router-link>


          </li>
        </ul>
      </div>
    </div>
    <div class="recentReplyTopics">
      <div class="title">最近参与的话题</div>
      <div class="content">
        <ul>
          <li v-for="list in user.recent_replies && user.recent_replies.slice(0,10)" :key="list.id">

            <a href="#" class="cell_time">{{changeTime(list.create_at)}}</a>
            <router-link class="list_title" :to="{name:'article',params:{id:list.id,name:list.author.loginname}}">
              <img :src="list.author.avatar_url" alt="user_image" />
              {{list.title}}

            </router-link>


          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInformation",
  props: {},
  data(){
    return {
      user: ''
    }
  },
  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/user/' + this.$route.params.name)
              .then(user => this.user = user.data.data)
              .catch(error => console.log(error))
    }
  },
  beforeMount() {
    this.getData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .userInfoWrap{
    width: 79%;
    .userInfo {
      .baseInfo {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 3px;
          margin-right: 8px;
        }
      }

      p {
        color: #ababab;
        font-size: 14px;
      }
      .score {
        font-size: 14px;
        margin-top: 15px;
      }
    }
    > div {
      margin-bottom: 13px;
    }
    text-align: left;
    .title {
      background-color: #f6f6f6;
      padding: 10px;
      border-top-left-radius:3px;
      border-top-right-radius: 3px;
      font-size: 14px;
      color: #444;

    }
    .content {
      background-color: #fff;
      border-top: 1px solid #e5e5e5;
      padding: 10px;
      li {
        list-style: none;
        padding: 10px 0;
        > .list_title {
          font-size: 16px;
          color: #08c;
          display: flex;
          align-items: center;
          > img{
            width: 30px;
            height: 30px;
            margin-right: 8px;
            border-radius: 3px;
          }
        }
        .cell_time {
          float: right;
          display: flex;
          align-items: center;
          font-size: 11px;
          color: #777;
          height: 100%;

        }
      }


    }
  }

</style>
