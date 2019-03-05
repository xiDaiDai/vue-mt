<template>
  <div class="home">
    <div class="my-content">
      我的页面
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import vfooter from '@/components/footer/footer.vue'
export default {
  name: 'header',
  data () {
    return {}
  },
  components: {
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
