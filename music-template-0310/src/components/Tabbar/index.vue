<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "介绍",
    to: {
      name: "Demo"
    }
  },
  {
    icon: "gem-o",
    title: "#功能界面",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: "仓库",
    to: {
      name: "About"
    }
  }
]);
</script>

<style>
.van-tabbar-item {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background);
}

</style>
