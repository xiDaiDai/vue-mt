<template>
  <div class="home">
    <a-scene>
      <a-sky src="https://xidaidai.github.io/vue-mt/build/img/room1.jpeg" rotation="0 -130 0" crossorigin="Anonymous"></a-sky>
    </a-scene>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'phonepaon',
    data () {
      return {
          roomName: ''
      }
    },
    components: {
    },
    computed: {},
    methods: {
      onClick(data) {

      },
    },
    created () {
       this.roomName = this.$route.params.imgName
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
