<script lang="ts" setup>
import ProductInfoHeader from "./components/ProductInfoHeader.vue";
import ProductInfoContainer from "./components/ProductInfoContainer.vue";
import ProductInfoFooter from "./components/ProductInfoFooter.vue";
const productId = $ref<string>();
import { queryDetailById } from "@/api/product/detail";
let productDetail = $ref<any>({});
onLoad(() => {
  productDetail = queryDetailById().data;
});
</script>

<template>
  <view style="background-color: #f3f3f3">
    <ProductInfoHeader
      :product-detail="productDetail"
      style="padding: 0 35rpx 0 35rpx"
      box-border
      overflow-hidden
    />
    <ProductInfoContainer
      :product-detail="productDetail"
      :product-id="productId"
      style="padding: 0 35rpx 0 35rpx"
      box-border
      overflow-hidden
    />
    <ProductInfoFooter style="padding: 0 35rpx 0 35rpx" box-border overflow-hidden />
  </view>
</template>

<style>
page {
  background: #f5f5f5;
}
</style>
