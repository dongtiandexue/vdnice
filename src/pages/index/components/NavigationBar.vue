<script lang="ts" setup>
import Search from "@/components/Search.vue";
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
      <Search color="999999" background-color="#f6f6f6" />
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
}
</style>
