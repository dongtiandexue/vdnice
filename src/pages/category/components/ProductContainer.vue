<template>
  <view class="container">
    <view class="products">
      <Product v-for="item in products" :key="item.id" :product="item" />
    </view>
  </view>
</template>

<script setup lang="ts">
import Product from "./product-container/Product.vue";
import { queryProductById } from "@/api/category";
let products = $ref<any>();
onLoad(() => {
  products = queryProductById().data.current_data;
});
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
  padding: 30rpx 35rpx;
  position: relative;
  box-sizing: border-box;

  .products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20rpx;
    justify-content: space-between;
  }
}
</style>
