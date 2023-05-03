<script lang="ts" setup>
const props = defineProps<{
  search: string;
}>();
const em = defineEmits(["doSearch"]);
const handleSearch = () => {
  if (!searchContent) {
    return;
  }
  em("doSearch", searchContent);
};
const searchContent = computed(() => {
  if (props.search) {
    return props.search;
  } else {
    return null;
  }
});
</script>

<template>
  <uni-nav-bar
    :fixed="true"
    :status-bar="true"
    :border="false"
    background-color="#ffffff"
    class="navbar"
    left-width="1px"
  >
    <!-- 搜索 -->
    <view class="search">
      <view class="search_container">
        <uni-easyinput
          prefixIcon="search"
          v-model="searchContent"
          placeholder="请输入搜索内容"
        >
        </uni-easyinput>
        <view class="search_button" @click="handleSearch">搜索</view>
      </view>
    </view>
  </uni-nav-bar>
</template>

<style lang="scss" scoped>
.navbar {
  :deep(.uni-navbar__header-container) {
    padding: 0;
  }

  :deep(.uni-navbar__header) {
    padding: 0;
  }
}

.search {
  margin: 10rpx 35rpx;

  .search_container {
    margin-top: 5rpx;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    ::v-deep .uni-easyinput__content {
      border-radius: 80rpx;
    }
  }

  .search_button {
    font-size: 32rpx;
    height: 100%;
    text-align: center;
    margin-left: 20rpx;
    color: #999;
  }
}
</style>
