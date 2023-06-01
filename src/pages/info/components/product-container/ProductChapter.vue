<template>
  <view class="container-chapter">
    <ChapterItem
      v-for="(item, index) in chapterList"
      mb-3
      :key="item.id"
      :chapter="item"
      :index="index"
    ></ChapterItem>
  </view>
</template>

<script setup lang="ts">
import type { IChapter } from "@/typings/interface";
import ChapterItem from "../product-chapter/ChapterItem.vue";
defineProps<{
  chapterList: IChapter[];
}>();
</script>
<style lang="scss" scoped></style>
