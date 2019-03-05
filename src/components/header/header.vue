<template>
  <div class="header-container" v-bind:class="{headerFixed:headerFixed}">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'vfooter',
  props: {
    title: String,
    headerFixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">

  .header-container {
    height: 45px;
    font-size: 14px;
    background-color: #1C1B20;
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center
  }

  .headerFixed {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
  }

</style>
