<template>
  <view relative w-full>
    <NavigationBar />
    <view style="padding: 0 35rpx 0 35rpx" box-border overflow-hidden>
      <view>
        <IndexSwiper :banner-list="bannerList" />
        <Category />
        <ProductContainer
          v-for="item in cardList"
          :key="item.id"
          :title="item.name"
          :list="item.productList"
        ></ProductContainer>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getBannerList, getCardList } from "@/api";

import NavigationBar from "./components/NavigationBar.vue";
import Category from "./components/Category.vue";
import IndexSwiper from "./components/IndexSwiper.vue";
import ProductContainer from "./components/ProductContainer.vue";

let bannerList = $ref<string[]>([]);
let cardList = $ref<any[]>([]);
onLoad(() => {
  bannerList = getBannerList()
    .data[0].imgUrl.split(",")
    .map((item) => item.replace("\n", ""));
  cardList = getCardList().data;
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
