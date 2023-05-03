<script lang="ts" setup>
import { getCardList } from "@/api";
import NavigationBar from "./components/NavigationBar.vue";
import SearchContainer from "./components/SearchContainer.vue";
import ProductContainer from "./components/ProductContainer.vue";
let searchHistory = $ref<string[]>([]);
let productList = $ref<any[]>([]);
let type = $ref<string>("history");
let currSearch = $ref<string>("");

const handleSearch = (content: string) => {
  if (!content) {
    return;
  }
  currSearch = content;
  handleAddHistory(content);
  type = "product";
  // 发送请求
  productList = getCardList().data[0].productList;
};

const handleAddHistory = (content: string) => {
  searchHistory.forEach((item, index, arr) => {
    if (item === content) {
      arr.splice(index, 1);
    }
  });
  searchHistory.unshift(content);
  uni.setStorage({
    key: "search_history_cache",
    data: searchHistory,
  });
};

const handleCleanHistory = () => {
  uni.removeStorage({
    key: "search_history_cache",
    success() {
      searchHistory = [];
    },
  });
};

onLoad(() => {
  uni.getStorage({
    key: "search_history_cache",
    success: function (res) {
      searchHistory = res.data;
    },
  });
});
</script>

<template>
  <view relative w-full>
    <NavigationBar @do-search="handleSearch" :search="currSearch" />
    <view style="padding: 0 35rpx 0 35rpx" box-border overflow-hidden>
      <SearchContainer
        v-if="type === 'history'"
        :history-list="searchHistory"
        @clean-history="handleCleanHistory"
        @do-search="handleSearch"
      />
      <ProductContainer :product-list="productList" v-else />
    </view>
  </view>
</template>

<style></style>
