// Search.vue

<script lang="ts" setup>
defineProps<{ color: string; backgroundColor: string }>();
const search = $ref<string>();
const em = defineEmits(["searchClick"]);
const styles = $ref<any>({
  color: "#2979FF",
  borderColor: "#2979FF",
  borderRadius: "80rpx",
});
const handleClick = () => {
  // 跳转到搜索页面
  //在起始页面跳转到test.vue页面并传递参数
  uni.navigateTo({
    url: "/pages/search/index",
  });
  // em("searchClick");
};
</script>

<template>
  <view class="search_container" @click="handleClick">
    <!-- 搜索图标 -->
    <!-- <image
      src="@/static/images/icons/index/search.svg"
      style="width: 32rpx; height: 28rpx"
      mode="scaleToFill"
      class="search_icon"
    /> -->
    <!-- 搜索内容体 -->
    <!-- <view
      class="search_input"
      confirm-type="search"
      :style="{ backgroundColor: `${backgroundColor}` }"
    >
      <text>请输入搜索内容</text>
    </view> -->
    <uni-easyinput
      prefixIcon="search"
      v-model="search"
      :style="styles"
      placeholder="请输入搜索内容"
    >
    </uni-easyinput>
  </view>
</template>

<style lang="scss" scoped>
.search_container {
  margin-top: 5rpx;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  image {
    position: absolute;
    left: 30rpx;
  }

  .search_icon_top {
    top: 35rpx;
    left: 36rpx;
  }

  .search_input {
    height: 80rpx;
    width: 100vw;
    font-size: 24rpx;
    border-radius: 80rpx;
    padding-left: 78rpx;

    text {
      color: #a5a1a1;
      line-height: 80rpx;
    }
  }
}

::v-deep .uni-easyinput__content {
  border-radius: 80rpx;
}
</style>
