<template>
  <div class="home">
    <!--<a-scene>-->
      <!--<a-sky src="https://xidaidai.github.io/vue-mt/build/img/room1.jpeg" rotation="0 -130 0" crossorigin="Anonymous"></a-sky>-->
    <!--</a-scene>-->
    <div id="container"></div>
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
      var div = document.getElementById('container');
      let w =  window.innerWidth;
      let h =  window.innerHeight;
      var PSV = new PhotoSphereViewer({
        // Path to the panorama
        panorama: './img/room1.jpeg',

        // Container
        container: div,

        // Deactivate the animation
        time_anim: false,

        // Display the navigation bar
        navbar: true,

        // Resize the panorama
        size: {
          width: w,
          height: h
        },

        // 限制顶部
        // tilt_up_max: Math.PI / 7,

        // 限制底部
        // tilt_down_max: Math.PI / 7
      });
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
