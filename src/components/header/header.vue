<template>
  <div class="header-container">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'vfooter',
    props: {
      title: String
    }
  }
</script>

<style scoped lang="less">

  .header-container {
    height: 45px;
    font-size: 14px;
    background-color: #1C1B20;
    border-bottom: 1px solid #eaeaea;
    color:#fff;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items:center

  }

</style>
