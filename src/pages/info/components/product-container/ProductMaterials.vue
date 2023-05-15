<template>
  <view class="container">
    <view class="note">
      <image src="@/static/images/icons/video/detail/note.png" />
      <view class="title">讲师笔记</view>
      <button>查看</button>
    </view>
    <view class="note">
      <image src="@/static/images/icons/video/detail/material.png" />
      <view class="title">课程资料</view>
      <button>下载</button>
    </view>
  </view>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 400rpx;
  justify-content: center;
  flex-direction: row !important;
  .note {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1rpx solid hsla(0, 0%, 47, 0);
    border-radius: 10rpx;
    box-shadow: 0 0 10rpx 0 #d5d5d5;
    box-sizing: border-box;
    flex-direction: column;
    margin-right: 40rpx;
    width: 174rpx;
    padding: 20rpx 20rpx;

    image {
      width: 100rpx;
      height: 100rpx;
      vertical-align: middle;
    }

    .title {
      font-size: 12rpx;
      margin-top: 6rpx;
      margin-bottom: 16rpx;
    }

    button {
      font-size: 12rpx;
      line-height: 38rpx;
    }
  }
}
</style>
