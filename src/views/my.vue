<template>
  <div class="home">
    <div class="my-content">
      <router-link :to="{ name: 'pano', params:{ imgName: 'room1' }}">
        <div class="cate-name">room1</div>
      </router-link>
      <router-link :to='{ name: "pano", params:{ imgName: "room2" }}'>
        <div class="cate-name">room2</div>
      </router-link>
      <router-link :to="{ name: 'pano', params:{ imgName: 'room3' }}">
        <div class="cate-name">room3</div>
      </router-link>

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
    computed: {},
    methods: {



    },
    created () {
    },

    mounted() {

    },

    beforeDestroy(){

    }

  }
</script>
<style>
  .my-content {
    font-size: 14px;
  }

</style>
