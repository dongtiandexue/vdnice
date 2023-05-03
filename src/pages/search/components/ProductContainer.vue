<template>
  <view class="search_product">
    <view>
      <Item v-for="item in productList" :key="item.id" :item="item"></Item>
    </view>
  </view>
</template>

<script setup lang="ts">
import Item from "./product-container/Item.vue";
import type { IProduct } from "@/typings/interface";
defineProps<{
  productList: IProduct[];
}>();
</script>
<style lang="scss" scoped>
.search_product {
  margin-top: 24rpx;
}
</style>
