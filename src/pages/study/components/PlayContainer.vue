<template>
  <view class="container">
    <view class="playRecords">
      <PlayRecord v-for="item in playRecords" :key="item.id" :play-record="item" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { queryPlayRecords } from "@/api/study";
import PlayRecord from "./play-container/PlayRecord.vue";
let playRecords = $ref<any[]>([]);
onLoad(() => {
  playRecords = queryPlayRecords().data.current_data;
});
</script>
<style lang="scss" scoped>
.container {
  .tab_top {
    width: 100%;
    display: flex;
    background-color: white;
  }

  .playRecords {
    padding: 0 20rpx;
    margin-top: 45rpx;
  }
}
</style>
