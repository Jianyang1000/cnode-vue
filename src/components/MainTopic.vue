<template>
  <div class="main_topic_wrap">
    <div class="list_type">
      <div @click="changeTab('all')" :class="{active: tab==='all'}" class="all type">
        <router-link to="/">全部</router-link>
      </div>
      <div @click="changeTab('good')" :class="{active: tab==='good'}" class="good type">
        <router-link to="/">精华</router-link>
      </div>
      <div @click="changeTab('share')" :class="{active: tab==='share'}" class="share type">
        <router-link to="/">分享</router-link>
      </div>
      <div @click="changeTab('ask')" :class="{active: tab==='ask'}" class="ask type">
        <router-link to="/">问答</router-link>
      </div>
      <div @click="changeTab('job')" :class="{active: tab==='job'}" class="job type">
        <router-link to="/">招聘</router-link>
      </div>
    </div>
    <transition name="fade">
      <div class="topic_list">
        <div class="cell" v-for="list in topicLists" :key="list.id">
          <a>
            <img :src="list.author.avatar_url" alt="icon" />
          </a>
          <span class="list_type_number">
            <span class="reply_count">{{list.reply_count}}</span>
            <span>/</span>
            <span class="like_count">{{list.visit_count}}</span>
          </span>
          <span
            class="list_type_tag"
            :class="{special: list.top || list.good}"
          >{{(list.top ? '置顶' : '') || (list.good ? '精华': '') || types[list.tab]}}</span>
          <router-link class="list_title" :to="{path: '/topic/'+ list.id}">{{list.title}}</router-link>
          <a href="#" class="cell_time">{{changeTime(list.create_at)}}</a>
        </div>
      </div>
    </transition>
    <div class="pager"></div>
  </div>
</template>

<script>
export default {
  name: "MainTopic",
  props: {},
  data() {
    return {
      isLoading: true,
      types: {
        ask: "问答",
        job: "招聘",
        share: "分享"
      }
    };
  },
  methods: {
    changeTab(type, page = 1) {
      this.$store.commit("changeTab", {
        type: type,
        topicLists: [],
        isLoading: true
      });
      this.$http
        .get(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${type}`)
        .then(result => result.data.data)
        .then(topicLists => {
          this.$store.commit("changeTab", {
            type: type,
            topicLists: topicLists,
            isLoading: false
          });
          console.log(topicLists);
        });
    }
  },
  computed: {
    topicLists() {
      return this.$store.state.topicLists;
    },
    tab() {
      return this.$store.state.tab;
    }
  },
  created() {
    this.$http
      .get("https://cnodejs.org/api/v1/topics", { params: { page: 1 } })
      .then(topicLists => {
        this.$store.commit("changeTab", {
          topicLists: topicLists.data.data,
          isLoading: false
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main_topic_wrap {
  width: 50%;
  margin: auto;
  //border: 1px solid red;
  padding-top: 16px;
  padding-bottom: 16px;
  .list_type {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    background-color: #f6f6f6;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    .type > a {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
      padding: 3px 4px;
      color: #80bd01;
    }
    .active > a {
      background-color: #80bd01;
      color: #fff;
      border-radius: 3px;
    }
  }
  .topic_list {
    background-color: #fff;
    .cell {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0 10px 10px;
      .cell_time {
        margin-left: auto;
        margin-right: 10px;
        padding-left: 30px;
        color: #778087;
        font-size: 13px;
        word-wrap: no-wrap;
        white-space: nowrap;
      }
      .list_type_number {
        width: 70px;
        padding: 0 5px;
        .reply_count {
          color: #9e78c0;
          font-size: 14px;
        }
        .like_count {
          color: #b4b4b4;
          font-size: 10px;
        }
      }

      .list_type_tag {
        background-color: #e5e5e5;
        font-size: 12px;
        color: #999;
        padding: 2px 4px;
        border-radius: 3px;
        white-space: nowrap;
      }
      .special {
        background-color: #80bd01;
        color: white;
      }
      .list_title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 10px;
        width: 90%;
        text-align: left;
      }
    }

    .cell > a > img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
  }
}
</style>
