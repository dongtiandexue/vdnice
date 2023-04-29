<script lang="ts" setup>
const props = defineProps<{
  bannerList: string[];
}>();
onLoad(() => {
  console.log(props.bannerList);
});
</script>

<template>
  <swiper indicator-dots autoplay circular>
    <swiper-item v-for="item in bannerList" :key="item">
      <image class="swiper_image" :src="item" />
    </swiper-item>
  </swiper>
</template>

<style lang="scss" scoped>
swiper {
  width: 100%;
  height: 310rpx;

  .swiper_image {
    width: 100%;
    height: 310rpx;
    border-radius: 10rpx;
  }
}
</style>
