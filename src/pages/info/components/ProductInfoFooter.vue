<template>
  <view class="container">
    <view class="collect">
      <uni-icons type="star" size="30"></uni-icons>
      <text class="collect-text">收藏</text>
    </view>
    <view class="right"><view class="play">立即观看</view></view>
  </view>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  align-items: center;
  padding: 10rpx 50rpx;
  white-space: nowrap;

  .collect {
    display: flex;
    flex-direction: column;
    margin-right: 50rpx;
    .collect-text {
      font-size: 16rpx;
      color: #303133;
    }
  }

  .right {
    display: flex;
    .play {
      height: 70rpx;
      line-height: 70rpx;
      width: 500rpx;
      border-radius: 50rpx;
      background-color: #303133;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
