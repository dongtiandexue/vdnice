<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text color-red text-50>{{ title }}</text>
      <text @click="changeLogin"> 是否登录：{{ isLogin }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
let { isLogin } = $(useUser());
let title = $ref("Hello");
const changeLogin = () => {
  isLogin = !isLogin;
};
onLoad(() => {
  title = "你是最帅的崽";
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
