<script lang="ts" setup>
import ProductInfoHeader from "./components/ProductInfoHeader.vue";
import ProductInfoContainer from "./components/ProductInfoContainer.vue";
import ProductInfoFooter from "./components/ProductInfoFooter.vue";
const productId = $ref<string>();
</script>

<template>
  <view style="background-color: #f3f3f3">
    <ProductInfoHeader />
    <ProductInfoContainer />
    <ProductInfoFooter />
  </view>
</template>

<style>
page {
  background: #f5f5f5;
}
</style>
