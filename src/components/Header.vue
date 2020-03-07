<template>
    <div class="Head">
      <router-link :to="{name:'index'}">
          <img src="../assets/backgroundImg.svg" alt="logo" />
      </router-link>
      <span @click="showInfo" class="about">关于</span>
    </div>
</template>

<script>
export default {
    name: "Head",
    methods: {
        showInfo(){
            this.$emit('showInfo')
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@background-color: #444;

.Head {
  background: @background-color;
  padding: 9px 0;
  display: flex;
  justify-content: space-around;
  img{width: 120px;display: inline-block;}
  .about {margin-top: 6px;color: #ccc;font-size: 13px;
      cursor: pointer;}
}
</style>
