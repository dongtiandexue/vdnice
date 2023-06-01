<template>
  <view class="container">
    <view class="chapter">
      <text class="title">第 {{ index + 1 }} 章 - {{ chapter.title }}</text>
      <uni-icons v-if="showEpisodeList" type="top" size="22" mr-1></uni-icons>
      <uni-icons v-else type="bottom" size="22" mr-1></uni-icons>
    </view>
    <view class="episode-list" v-if="chapter.episodeList">
      <view
        class="episode"
        v-for="(episode, index) in chapter.episodeList"
        :key="episode.id"
      >
        <uni-icons type="videocam" size="22" mr-1></uni-icons>
        <text class="title">第 {{ index + 1 }} 节 - {{ episode.title }}</text>
        <text class="free" v-if="episode.free === 1">试看</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { IChapter } from "@/typings/interface";

defineProps<{
  chapter: IChapter;
  index: number;
}>();

let showEpisodeList = $ref<boolean>();
</script>
<style lang="scss" scoped>
.container {
  border: 1rpx solid rgb(233, 233, 233);
  .chapter {
    padding: 10rpx 20rpx;
    background-color: rgba(214, 214, 214, 0.1);
    .title {
      color: #333333;
      font-size: 26rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
  }

  .episode-list {
    padding: 16rpx 28rpx;

    .episode {
      display: flex;
      align-items: center;
      margin: 10rpx 0;
      .title {
        color: #333333;
        font-size: 24rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }

      .free {
        width: 60rpx;
        font-size: 24rpx;
        color: red;
        margin-left: auto;
        text-align: right;
      }
    }
  }
}
</style>
