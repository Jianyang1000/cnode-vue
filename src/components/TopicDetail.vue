<template>
  <div class="topicDetail">
    <div class="topicHeader">
      <h3>
        <span class="topic_type">置顶</span>　{{topic.title}}
      </h3>
      <div class="topicInfromation">
        <span>{{topic.create_at}}</span>
        <span>作者　{{topic.author.loginname}}</span>
        <span>{{topic.visit_count}}　次浏览</span>
        <span>来自{{topic.tab}}</span>
      </div>
    </div>
    <div class="topicContentWrap">
        <div v-html="topic.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topicDetail",
  props: {},
  data() {
    return {
      topic: ''
    };
  },
  async created() {
    let topic = await this.$http.get(
      "https://cnodejs.org/api/v1/topic/" + this.$route.params.id
    );
    this.topic = topic.data.data
    console.log(topic)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topicDetail {
  background-color: #fff;
  width: 78%;
  border-radius: 3px;
  text-align: left;
  .topicHeader {
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px solid #e5e5e5;
    h3 {
      margin: 8px 0;
    }
    .topicInfromation {
      color: #838383;
      font-size: 12px;
    }
    .topicInfromation > span::before {
      content: "•";
    }
  }
  .topicContentWrap {
      width: 96%;
      margin: auto;
  }
}
.topic_type {
  padding: 2px 4px;
  color: #fff;
  background-color: #80bd01;
  font-size: 12px;
  border-radius: 3px;
}
</style>
