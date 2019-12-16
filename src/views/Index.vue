<template>
  <div class="index">
    <CnodeHead />
    <div class="content">
        <MainTopic :topicLists="topicLists" />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CnodeHead from '@/components/CnodeHead.vue'
import MainTopic from '@/components/MainTopic.vue'

export default {
  name: 'home',
  components: {
    MainTopic,
    CnodeHead
  },
  data(){
    return {
      topicLists: []
    }
  },
  created(){
    
  }
}
</script>


<style lang="less" scoped>
    .content {
        background-color: #e1e1e1;
    }
</style>