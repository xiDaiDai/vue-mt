<template>
  <div class="home">
    <!--<a-scene>-->
      <!--<a-sky src="https://xidaidai.github.io/vue-mt/build/img/room1.jpeg" rotation="0 -130 0" crossorigin="Anonymous"></a-sky>-->
    <!--</a-scene>-->
    <div id="photosphere"></div>
  </div>
</template>

<script>


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
      var PSV = new PhotoSphereViewer({
        panorama: './img/room1.jpeg',
        container: 'container',
      });

      const PSV = new PhotoSphereViewer({
        container      : 'photosphere',
        panorama       : './img/room1.jpeg',
        caption        : 'dfg',
        longitudeRange : [-7 * Math.PI / 8, 7 * Math.PI / 8],
        latitudeRange  : [-3 * Math.PI / 4, 3 * Math.PI / 4],
        autorotateSpeed: '-2rpm',
        defaultZoomLvl : 50,
        fisheye        : false,
        moveSpeed      : 1.1,
//    touchmoveTwoFingers: true,
//    mousemoveHover: true,
        navbar         : [
          'autorotate', 'zoom', 'download', 'markers', 'markersList',
          {
            title    : 'Change image',
            className: 'custom-button',
            content  : '🔄',
            onClick  : (function() {
              var i = 0;
              var loading = false;

              return function() {
                if (loading) {
                  return;
                }

                i = 1 - i;
                loading = true;
                PSV.hud.clearMarkers();

                PSV.setPanorama(panos[i].url, panos[i].target, true)
                  .then(function() {
                    PSV.navbar.setCaption(panos[i].desc);
                    loading = false;
                  });
              };
            }()),
          },
          {
            title    : 'Random position',
            className: 'custom-button',
            content  : '🔀',
            onClick  : function() {
              PSV.animate({
                longitude: (Math.random() - 0.5) * 3 / 2 * Math.PI,
                latitude : (Math.random() - 0.5) * 3 / 4 * Math.PI,
                zoom     : Math.random() * 60 + 20
              }, 1500);
            },
          },
          'caption', 'gyroscope', 'stereo', 'fullscreen',
        ],
        markers        : (function() {
          var a = [];

          for (var i = 0; i < Math.PI * 2; i += Math.PI / 4) {
            for (var j = -Math.PI / 2 + Math.PI / 4; j < Math.PI / 2; j += Math.PI / 4) {
              a.push({
                id       : '#' + a.length,
                tooltip  : '#' + a.length,
                latitude : j,
                longitude: i,
                image    : 'assets/pin1.png',
                width    : 32,
                height   : 32,
                anchor   : 'bottom center',
                data     : {
                  deletable: true,
                },
              });
            }
          }

          a.push({
            id       : 'lorem',
            tooltip  : {
              content : 'Lorem ipsum dolor ist amet et consecturo.',
              position: 'bottom right',
            },
            content  : document.getElementById('pin-content').innerHTML,
            latitude : 0,
            longitude: 0.20,
            image    : 'assets/pin2.png',
            width    : 32,
            height   : 32,
            anchor   : 'bottom center',
          });

          a.push({
            id        : 'polygon-sky',
            svgStyle  : {
              fill: 'rgba(0, 190, 255, 0.1)',
            },
            polygonRad: (function() {
              var points = [];

              for (var i = 0; i < Math.PI * 2; i += Math.PI / 8) {
                points.push(i);
                points.push(Math.PI / 8);
              }

              return points;
            }()),
          });

          a.push({
            id       : 'polygon',
            content  : 'This mountain is so great it has dots on it!',
            polygonPx: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
            svgStyle : {
              fill       : 'url(#points)', //'rgba(255,0,0,0.3)',
              stroke     : 'rgba(255, 0, 50, 0.8)',
              strokeWidth: '2px',
            },
            tooltip  : {
              content : 'This is a mountain',
              position: 'right bottom',
            },
          });

          a.push({
            id         : 'polyline',
            polylineRad: [5.924, 0.064, 5.859, -0.061, 5.710, -0.132, 5.410, -0.287, 4.329, -0.490, 3.838, -0.370, 3.725, -0.241],
            svgStyle   : {
              stroke        : 'rgba(80, 100, 50, 0.8)',
              strokeLinecap : 'round',
              strokeLinejoin: 'round',
              strokeWidth   : '10px',
            },
            tooltip    : 'This is a track',
          });

          a.push({
            id       : 'html-img-demo',
            html     : 'HTML & Image',
            scale    : [0.5, 1.5],
            className: 'demo-label',
            longitude: 0.5,
            latitude : -0.48,
            hideList : true,
          });

          a.push({
            id         : 'gif',
            image      : 'assets/photosphere-logo.gif',
            width      : 100,
            height     : 100,
            longitude  : 0.60,
            latitude   : -0.35,
            listContent: 'An animated gif',
          });

          a.push({
            id       : 'text',
            html     : 'This <b>is</b> text <img src="assets/pin3.png" style="height: 24px; vertical-align: top;"/>',
            anchor   : 'bottom right',
            style    : {
              color     : 'white',
              fontSize  : '20px',
              fontFamily: 'Helvetica, sans-serif',
              textAlign : 'center',
            },
            longitude: 0.45,
            latitude : -0.4,
          });

          a.push({
            id       : 'svg-demo',
            html     : 'SVG marker demo',
            scale    : [0.5, 1.5],
            className: 'demo-label',
            longitude: -0.5,
            latitude : -0.48,
            hideList : true,
          });

          a.push({
            id       : 'circle',
            tooltip  : 'A circle of radius 30',
            circle   : 30,
            svgStyle : {
              fill       : 'rgba(255,255,0,0.3)',
              stroke     : 'yellow',
              strokeWidth: '2px',
            },
            longitude: -0.5,
            latitude : -0.28,
            anchor   : 'center right',
          });

          a.push({
            id       : 'ellipse',
            tooltip  : 'An ellipse of radius 60/30',
            ellipse  : [60, 30],
            svgStyle : {
              fill       : 'rgba(255,255,0,0.3)',
              stroke     : 'yellow',
              strokeWidth: '2px',
            },
            longitude: -0.5,
            latitude : -0.28,
            anchor   : 'center left',
          });

          a.push({
            id       : 'rect',
            tooltip  : 'A square a side 60',
            rect     : [60, 60],
            svgStyle : {
              fill       : 'rgba(255,255,0,0.3)',
              stroke     : 'yellow',
              strokeWidth: '2px',
            },
            longitude: -0.5,
            latitude : -0.38,
            anchor   : 'center right',
          });

          a.push({
            id       : 'path',
            tooltip  : 'A custom path',
            path     : 'M 0 0 L 60 60 L 60 0 L 0 60 L 0 0',
            svgStyle : {
              fill       : 'rgba(255,255,0,0.3)',
              stroke     : 'yellow',
              strokeWidth: '2px',
            },
            longitude: -0.5,
            latitude : -0.38,
            anchor   : 'center left',
          });

          a.push({
            id       : 'scale-demo',
            html     : 'Marker scale demo',
            scale    : [0.5, 1.5],
            className: 'demo-label',
            longitude: 0,
            latitude : -0.48,
            hideList : true,
          });

          a.push({
            id       : 'scale-0',
            tooltip  : 'No scale',
            scale    : false,
            circle   : 20,
            svgStyle : {
              fill: 'rgba(0, 0, 0, 0.5)',
            },
            longitude: -0.1,
            latitude : -0.4,
          });

          a.push({
            id       : 'scale-1',
            tooltip  : '<code>zoom x2</code>',
            scale    : 2,
            circle   : 20,
            svgStyle : {
              fill: 'rgba(0, 0, 0, 0.5)',
            },
            longitude: 0,
            latitude : -0.4,
          });

          a.push({
            id       : 'scale-2',
            tooltip  : '<code>zoom x0.5 ; zoom x1.5</code>',
            scale    : [0.5, 1.5],
            circle   : 20,
            svgStyle : {
              fill: 'rgba(0, 0, 0, 0.5)',
            },
            longitude: 0.1,
            latitude : -0.4,
          });

          return a;
        }()),
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


  #photosphere {
    width: 100%;
    height: 100%;
  }

  .psv-button.custom-button {
    font-size: 22px;
    line-height: 20px;
  }

  .demo-label {
    color: white;
    font-size: 20px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    padding: 5px;
    border: 1px solid white;
    background: rgba(0,0,0,0.4);
  }

</style>
