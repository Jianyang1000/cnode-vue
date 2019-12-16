<template>
  <div class="cnodeHeadWrap">
    <div class="cnodeHead">
      <a class="logoWrap">
        <img src="../assets/backgroundImg.svg" alt="logo" />
      </a>

      <a href="#" class="about">关于</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "cnodeHead",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@background-color: #444;

.cnodeHeadWrap {
  background: @background-color;
  .logoWrap {
    width: 120px;
    height: 34px;
    line-height: 34px;
    padding: 3px 20px;
    display: inline-block;
  }
  .cnodeHead {
    width: 90%;
    margin: auto;
    padding: 5px;
    display: flex;
    justify-content: space-around;
  }
  .about {
    display: inline-block;
    color: #ccc;
    vertical-align: middle;
    font-size: 13px;
  }
}
</style>
