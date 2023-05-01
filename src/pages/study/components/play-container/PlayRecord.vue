<template>
  <view class="playRecord">
    <image :src="playRecord.coverImg" mode="scaleToFill" />
    <view class="right">
      <text class="tile">{{ playRecord.productTitle }}</text>
      <view class="progress">
        <progress
          :percent="getProgress(playRecord)"
          active-color="#f59a23"
          border-radius="35"
        />
        <text>已学习</text>
        <text class="precent"> {{ getProgress(playRecord) }}% </text>
      </view>
      <view class="bottom">
        <text v-if="playRecord.learnIds" class="chapter">
          学习到: {{ playRecord.episodeTitle }}
        </text>
        <text v-else class="chapter">未学习</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { IPlayRecord } from "@/typings/interface";

defineProps<{
  playRecord: IPlayRecord;
}>();

function getProgress(playRecord: IPlayRecord) {
  const progress = Math.ceil(
    (playRecord?.learnIds.split(",")?.length / playRecord?.episodeNum) * 100
  );
  return !playRecord?.learnIds ? 0 : progress >= 100 ? 100 : progress;
}
</script>
<style lang="scss" scoped>
.playRecord {
  width: 100%;
  display: flex;
  margin-bottom: 40rpx;
  padding: 30rpx;
  border-radius: 30rpx;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 3px 10px 0px rgba(215, 215, 215, 0.35);

  image {
    flex-shrink: 0;
    width: 260rpx;
    height: 180rpx;
    border-radius: 10rpx;
  }
  .right {
    margin-left: 20rpx;

    .title {
      overflow: hidden;
      font-size: 24rpx;
      color: #333;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    .progress {
      display: flex;
      margin-top: 15rpx;

      // 兼容微信小程序
      progress {
        width: 60%;
        margin-right: 15rpx;
      }

      :deep(.uni-progress) {
        width: 60%;
        margin-right: 15rpx;
      }

      :deep(.uni-progress-inner-bar) {
        border-radius: 35rpx;
      }

      text {
        font-size: 20rpx;
        color: #333333;
        margin-right: 5rpx;

        &.percent {
          color: #f7595b;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15rpx;
      background-color: white;

      .chapter {
        color: #555555;
        font-size: 20rpx;
        margin-left: 10rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 250rpx;
      }

      .continue {
        height: 38rpx;
        color: white;
        font-size: 20rpx;
        line-height: 38rpx;
        border-radius: 10rpx;
        background-color: #f38e48;
        flex-shrink: 0;

        &::after {
          border: none;
        }
      }
    }
  }
}
</style>
