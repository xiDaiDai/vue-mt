<template>
  <div class="orders">
    <vheader title="订单"></vheader>
    <div class="orders-content">
      <div  v-for="order in orders">
        <div class="order-item">{{order}}</div>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import vfooter from '@/components/footer/footer.vue'
import vheader from '@/components/header/header.vue'

// @ is an alias to /src
export default {
  name: 'orderlist',
  data () {
    return {
      orders:[0,1,2,3,4,5,6,7,8,9]
    }
  },
  components: {
    vfooter,
    vheader
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
    changeInfo () {
      this.$store.dispatch('home/changeInfo', { firstName: '22222', lastName: '333' })
    }
  },
  created () {
    console.log('----- create ------')
  },
  mounted () {
    console.log('----- mounted ------')
  },
  updated () {
    console.log('----- updated ------')
  },
  destroyed () {
    console.log('----- destroyed ------')
  }
}
</script>
<style>
  .orders-content {
    margin-bottom:50px;
  }
  .order-item{
    padding: 50px;
  }
</style>
