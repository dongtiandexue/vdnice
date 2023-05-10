<template>
  <view class="container">
    <!-- 使用scroll-view实现tabs滑动切换 -->
    <scroll-view
      class="top-menu-view"
      scroll-x="true"
      :scroll-into-view="'item' + tabCurrent"
    >
      <view
        class="menu-topic-view"
        v-for="item in tabs"
        :id="item.id"
        :key="item.id"
        @click="swichMenu(item.id)"
      >
        <view :class="currentTab == item.id ? 'menu-topic-act' : 'menu-topic'">
          <text class="menu-topic-text">{{ item.name }}</text>
          <view class="menu-topic-bottom">
            <view class="menu-topic-bottom-color"></view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- 内容 -->
    <!-- <swiper class="swiper-box-list" :current="currentTab" @change="swiperChange">
      <swiper-item
        class="swiper-topic-list"
        v-for="item in swiperDateList"
        :key="item.id"
      >
        <view class="swiper-item"> -->
    <view v-if="currentTab == 1">
      <rich-text :nodes="productDetail.summary"></rich-text>
    </view>
    <view v-else-if="currentTab == 2">
      <ProductChapter :chapter-list="chapterList"></ProductChapter>
    </view>
    <view v-else>
      <view>其他</view>
    </view>
    <!-- </view>
      </swiper-item>
    </swiper> -->
  </view>
</template>

<script setup lang="ts">
import { queryChapterById } from "@/api/product/detail";
import type { IChapter } from "@/typings/interface";
import ProductChapter from "./product-container/ProductChapter.vue";
let tabCurrent = $ref<number>(1);
let currentTab = $ref<number>(1);
let chapterList = $ref<any[]>([]);
const tabs = $ref<any[]>([
  {
    id: 1,
    name: "课程介绍",
  },
  {
    id: 2,
    name: "课程目录",
  },
  {
    id: 3,
    name: "用户评价",
  },
  {
    id: 4,
    name: "课程资料",
  },
]);
const swiperDateList = $ref<any[]>([
  {
    id: 1,
    content: "推荐",
  },
  {
    id: 2,
    content: "交通交通",
  },
  {
    id: 3,
    content: "住房",
  },
  {
    id: 4,
    content: "社会保障",
  },
]);

const swichMenu = (id: number) => {
  console.log(`swichMenu ${id}`);
  currentTab = id;
  tabCurrent = id;
};
const swiperChange = (e: any) => {
  let index = e.detail.current;

  swichMenu(index);
};

defineProps<{
  productDetail: any;
}>();

onLoad(() => {
  chapterList = queryChapterById().data;
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
  padding-top: 40rpx;
  background-color: #fff;
  border-radius: 10rpx;

  .top-menu-view {
    display: flex;
    left: 0;
    white-space: nowrap;
    width: 100%;
    height: 86rpx;

    /* h5的scroll-view滚动容器内元素样式 */
    ::v-deep .uni-scroll-view-content {
      display: flex;
      justify-content: space-between;
    }
    .menu-topic-view {
      display: inline-block;
      white-space: nowrap;
      height: 60rpx;
      position: relative;

      .menu-topic-text {
        font-size: 27rpx;
        color: #303133;
        padding: 10rpx 30rpx;
      }

      .menu-topic-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;

        .menu-topic-bottom-color {
          width: 40rpx;
          height: 4rpx;
        }
      }

      .menu-topic-act .menu-topic-bottom {
        display: flex;
        justify-content: center;
      }

      .menu-topic-act .menu-topic-bottom-color {
        background: #000;
      }
    }
  }

  .swiper-box-list {
    width: 100%;
    flex: 1;
    .swiper-topic-list {
      width: 100%;
    }
  }
}
</style>
