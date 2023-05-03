<template>
  <view pt-2 class="container">
    <!-- 搜索历史 -->
    <view class="history" pb-2>
      <view class="head">
        <view class="title"><text>搜索历史</text></view>
        <view class="icon" @click="cleanHistory"
          ><uni-icons type="trash" size="20"></uni-icons
        ></view>
      </view>
      <view class="content">
        <text v-for="item in historyList" :key="item" mt-2 mr-2 @click="doSearch(item)">{{
          item
        }}</text>
      </view>
    </view>
    <!-- 热门搜索 -->
    <view class="hot">
      <view class="head">
        <view class="title"><text>热门搜索</text></view>
      </view>
      <view class="content">
        <text v-for="item in hotList" :key="item" mt-2 mr-2 @click="doSearch(item)">{{
          item
        }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  historyList: string[];
}>();
const em = defineEmits(["cleanHistory", "doSearch"]);
const hotList = $ref<string[]>([
  "java",
  "Linux",
  "SpringBoot",
  "微服务",
  "架构大课",
  "mysql",
  "redis",
]);

const cleanHistory = () => {
  em("cleanHistory");
};

const doSearch = (content: string) => {
  em("doSearch", content);
};
</script>
<style lang="scss" scoped>
.container {
  .history {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-bottom: 40rpx;
    .head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;
    }

    .content {
      text {
        display: inline-block;
        font-size: 20rpx;
        color: #999;
        background-color: #f6f6f6;
        padding: 10rpx 20rpx;
        border-radius: 20rpx;
      }
    }
  }

  .hot {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;
    }

    .content {
      overflow: hidden;
      padding-top: 1px;
      text {
        display: inline-block;
        font-size: 20rpx;
        color: #999;
        background-color: #f6f6f6;
        padding: 10rpx 20rpx;
        border-radius: 20rpx;
      }
    }
  }
}
</style>
