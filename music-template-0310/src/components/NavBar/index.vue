<script lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>

<template>
  <van-nav-bar
  title="XXX"
  left-text="返回"
  left-arrow
  fixed
  placeholder
  @click-left="onClickLeft"
/>
</template>

<style scoped>
::v-deep .van-nav-bar__left .van-nav-bar__text  {
  color: var(--van-gray-8); /* 将 #yourColor 替换为您想要的颜色值 */
}
::v-deep .van-icon-arrow-left{
  color: var(--nav-bar-icon-color, var(--van-gray-8)) !important;
}
</style>