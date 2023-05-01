<template>
  <uni-nav-bar
    :fixed="true"
    :status-bar="true"
    :border="false"
    background-color="#f3f3f3"
    left-width="0"
    right-width="0"
  >
    <Search color="#999" background-color="white" />
  </uni-nav-bar>
</template>

<script setup lang="ts">
import Search from "@/components/Search.vue";
</script>
<style lang="scss" scoped></style>
