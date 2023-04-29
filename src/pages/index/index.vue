<template>
  <view class="content"> </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { getBannerList, getCardList } from "@/api";
let bannerList = reactive<string[]>([]);
let productList = reactive<any[]>([]);
onLoad(() => {
  bannerList = getBannerList()
    .data[0].imgUrl.split(",")
    .map((item) => item.replace("\n", ""));
  productList = getCardList().data;
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
