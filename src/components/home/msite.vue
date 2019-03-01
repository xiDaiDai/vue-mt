<template>
  <div>
    <div class="item-container">
      <div class="item" v-for="item in shopList">
        <img :src=item.picUrl />
        <div class="shop-right">
          <div class="shop-name">{{item.shopName}}</div>
          <div class="shop-service">{{item.monthSalesTip}}</div>
          <div class="shop-service">{{item.minPriceTip}}</div>
          <div class="shop-service">{{item.shippingFeeTip}}</div>
          <div class="shop-service">{{item.distance}}</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import request from '@/api/home'

  export default {
    data(){
      return {
        shopList: request.getShopList()
      }
    }
  }
</script>

<style scoped lang="less">

  .item-container {
    margin-bottom: 50px;
  }

  .item {
    display: flex;
    flex-direction:row;
    padding:4px 8px;
    border-top: 1px solid #eaeaea;

  }

  .item img{
    width: 80px;
    height: 44px;
  }

  .shop-right {
    flex:1;
    margin-left: 8px;
    div {
      text-align: left;
    }
    .shop-name {
      font-size: 14px;
      font-weight: bolder;
    }
    .shop-service {
      font-size: 12px;
    }

  }



</style>
