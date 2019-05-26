<template>
  <div class="home">
      <div id="panoramaConianer"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import 'three'
  import {tpanorama ,tpanoramaSetting} from 'tpanorama'

  export default {
    name: 'header',
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
     let opt = {
        container: 'panoramaConianer',//容器
        url: `./img/${this.roomName}.jpeg`,
        lables: [
          {position: {lon: -72.00, lat: 9.00}, logoUrl: './img/logo.png', text: 'yy',code:'p1'},
          {position: {lon: 114.12, lat: 69.48}, logoUrl: './img/logo.png', text: '一片云彩',code:'p1'},
          {position: {lon: 132.48, lat: -12.24}, logoUrl: './img/logo.png', text: '大海',code:'p1'}
        ],
        widthSegments: 60,//水平切段数
        heightSegments: 40,//垂直切段数（值小粗糙速度快，值大精细速度慢）
        pRadius: 1000,//全景球的半径，推荐使用默认值
        minFocalLength: 6,//镜头最a小拉近距离
        maxFocalLength: 100,//镜头最大拉近距离
        sprite: 'icon', // label,icon
        onClick: this.onClick,
      }
      tp = new tpanorama(opt)
    },

    beforeDestroy(){
      tp = null;
    }
  }
</script>
<style>
  .my-content {
    font-size: 14px;
  }

</style>
