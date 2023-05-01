<script lang="ts" setup></script>

<template>
  <uni-nav-bar
    :fixed="true"
    :status-bar="true"
    :border="false"
    background-color="#fff"
    left-width="300rpx"
    right-width="300rpx"
  >
    <template #left>
      <text class="my_study"> 我的学习 </text>
    </template>
  </uni-nav-bar>
</template>

<style lang="scss" scoped>
.my_study {
  color: #333;
  font-size: 36rpx;
  font-weight: bold;
  padding-left: 14rpx;
}
</style>
