<template>
  <div class="about">
    <div>
      orders
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import vfooter from '@/components/footer/vfooter.vue'

// @ is an alias to /src
export default {
  name: 'about',
  data () {
    return {
    }
  },
  components: {
    vfooter
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
