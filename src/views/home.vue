<template>
  <div class="home">
    <vheader title="首页" :headerFixed=true ></vheader>
    <div class="home-content">
      <vcate></vcate>
      <shoplist></shoplist>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// @ is an alias to /src
import vfooter from '@/components/footer/footer.vue'
import vheader from '@/components/header/header.vue'
import vcate from '@/components/home/cate-item.vue'
import shoplist from '@/components/home/msite.vue'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    vheader,
    vfooter,
    vcate,
    shoplist
  },
  computed: {
    ...mapState({
      info: state => state.home.info
    }),
    ...mapGetters('home', {
      fullName: 'fullName'
    })
  },
  methods: {
    requestInfo () {
      this.$store.dispatch('home/getInfo')
    }
  },
  created () {
  }
}
</script>
<style scoped lang="less">
  .home-content {
    margin-top:45px;
  }
</style>
