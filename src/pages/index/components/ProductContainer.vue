<template>
  <view class="hot-product">
    <div between mb-3>
      <text class="title" truncate>{{ title }}</text>
    </div>
    <view class="items">
      <Item
        v-for="item in list"
        :key="item.id"
        :item="item"
        @click="showProductInfo"
      ></Item>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { IProduct } from "@/typings/interface";
import Item from "./product-container/Item.vue";

defineProps<{
  title: string;
  list: IProduct[];
}>();
//const { } = toRefs(props);

const showProductInfo = () => {
  uni.navigateTo({
    url: "/pages/info/index",
  });
};
</script>
<style lang="scss" scoped>
.hot_product {
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .title {
    color: #333;
    font-size: 38rpx;
  }
}
</style>
