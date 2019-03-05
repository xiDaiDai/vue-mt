<template>
  <div class="footer-container">
      <div class="item-container">
        <div class="item" v-for="item in items">
          <a :href=item.path>
          <img :src= "$route.path.indexOf(item.alia) > -1 ?item.activeIcon:item.icon"/>
          <div class="cate-name">{{item.name}}</div>
          </a>
        </div>
      </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        items:[
          {
            "cateId": 910,
            "icon": "http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png",
            "activeIcon": "http://p1.meituan.net/jungle/39edab4073ecc494fdb175854fa64eaa9507.png",
            "name": "首页",
            "alia":'home',
            "path": "#/home"
          },
          {
            "cateId": 101574,
            "icon": "http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png",
            "activeIcon": "http://p1.meituan.net/jungle/39edab4073ecc494fdb175854fa64eaa9507.png",
            "name": "订单",
            "alia":'orderlist',
            "path": "#/orderlist"
          },
          {
            "cateId": 101578,
            "icon": "http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png",
            "activeIcon": "http://p1.meituan.net/jungle/39edab4073ecc494fdb175854fa64eaa9507.png",
            "name": "我的",
            "alia":'my',
            "path": "#/my"
          }
        ]
      }
    },

    created(){
      console.log(this.$route.path)
    }
  }
</script>

<style scoped lang="less">

  .footer-container {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 50px;
    font-size: 12px;
    border-top: 1px solid #eaeaea;
    background-color: #fff;
  }

  .item-container {
    display: flex;
    flex-direction:row;
    justify-content:center;

  }

  .item {
    flex: auto;
    padding:4px 0px ;
  }

  .item img{
    width: 24px;
    height: 24px;
  }

  .cate-name {
    font-size: 12px;
    transform: scale(0.83);
  }

  .tabActive {
    font-size: 14px;
  }
</style>
