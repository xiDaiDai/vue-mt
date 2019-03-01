<template>
  <div>
    <div class="item-container">
      <div class="item" v-for="item in items">
        <img :src=item.icon />
        <div class="cate-name">{{item.name}}</div>
      </div>
    </div>
    <div class="item-container">
      <div class="item" v-for="item in items">
        <img :src=item.icon />
        <div class="cate-name">{{item.name}}</div>
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
              "name": "美食"
            },
            {
              "cateId": 101574,
              "icon": "http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png",
              "name": "美团超市"
            },
            {
              "cateId": 101578,
              "icon": "http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png",
              "name": "生鲜果蔬"
            },
            {
              "cateId": 960,
              "icon": "http://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png",
              "name": "美团专送"
            },
            {
              "cateId": 101181,
              "icon": "http://p1.meituan.net/jungle/39edab4073ecc494fdb175854fa64eaa9507.png",
              "name": "跑腿代购"
            }
          ]
      }
    }
  }
</script>

<style scoped lang="less">

  .item-container {
    display: flex;
    flex-direction:row;
    justify-content:center;

  }

  .item {
    flex: auto;
    padding:8px 0px ;
  }

  .item img{
    width: 44px;
    height: 44px;
  }

  .cate-name {
    font-size: 12px;
  }



</style>
