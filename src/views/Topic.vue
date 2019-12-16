<template>
  <div class="topicWrap">
    <CnodeHead />
    <div class="topic">
      <TopicDetail />
      <AsideBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CnodeHead from "@/components/CnodeHead.vue";
import TopicDetail from "@/components/TopicDetail.vue";
import AsideBar from "@/components/AsideBar.vue";


export default {
  name: "home",
  components: {
    CnodeHead,
    TopicDetail,
    AsideBar
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.id);
  },
  methods: {}
};
</script>


<style lang="less" scoped>
.topicWrap {
  background-color: #e1e1e1;
}
.topic {
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 16px;
  
  display: flex;
  justify-content: space-between;
}
</style>