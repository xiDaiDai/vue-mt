<template>
  <div class="home">
    <vheader title="我的"></vheader>
    <div class="my-content">
      我的页面
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import vfooter from '@/components/footer/vfooter.vue'
import vheader from '@/components/header/header.vue'
export default {
  name: 'header',
  data () {
    return {}
  },
  components: {
    vheader,
    vfooter
  },
  computed: {

  },
  methods: {

  },
  created () {
  }
}
</script>
<style>
  .my-content {
    font-size: 14px;
  }
</style>
