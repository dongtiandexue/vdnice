<template>
  <view class="container">
    <view class="left">
      <view><image :src="productDetail.coverImg" /></view>
      <view class="play" @click="playVideo">
        <image src="@/static/images/icons/video/detail/play.png" />
        <text c-white>点击试看</text>
      </view>
    </view>
    <view class="right">
      <text class="title">{{ productDetail.title }}</text>
      <view class="level_hot">
        <text class="level">级别：高级</text>
        <image v-for="i in 5" :key="i" src="@/static/images/icons/common/fire.png" />
      </view>
      <view class="user_price">
        <view class="user">
          <image src="@/static/images/icons/common/user.png" />
          <text>{{ productDetail.buyNum }}</text>
        </view>
        <view class="price">
          <view>
            <text class="dollor">¥</text>
            <text class="price">{{ productDetail.amount }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  productDetail: any;
}>();
const playVideo = () => {
  uni.navigateTo({
    url: "/pages/play/index",
  });
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
  .left {
    position: relative;
    image {
      width: 300rpx;
      height: 170rpx;
      border-radius: 10rpx;
      flex-shrink: 0;
    }

    .play {
      position: absolute;
      top: 35rpx;
      left: 75rpx;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // width: 150rpx;
      // height: 120rpx;
      background-color: #000;
      opacity: 0.8;
      padding: 12rpx 24rpx;

      image {
        width: 52rpx;
        height: 52rpx;
      }

      text {
        font-size: 27rpx;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15rpx;
    .title {
      color: #333333;
      font-size: 27rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .level_hot {
      display: flex;
      align-items: center;
      .level {
        color: #7f7f7f;
        font-size: 24rpx;
        margin-right: 10rpx;
      }

      image {
        height: 27rpx;
        width: 27rpx;
        margin-right: 5rpx;
      }
    }

    .user_price {
      display: flex;
      justify-content: space-between;
      .user {
        image {
          width: 32rpx;
          height: 32rpx;
        }

        text {
          font-size: 28rpx;
          color: #7f7f7f;
          margin-left: 5rpx;
        }
      }

      .price {
        display: flex;
        align-items: baseline;
        .dollor {
          font-size: 24rpx;
        }

        & > view {
          display: flex;
          align-items: baseline;
          margin-left: 20rpx;

          &:last-child {
            color: #e51b11;
            font-size: 40rpx;
          }
        }
      }
    }
  }
}
</style>
