<script setup lang="ts" name="About"></script>


<template>
  <div class="page-container">
    <div class="voice-list">
      
    <van-card  currency="" price="2分钟21秒" desc="九章算术" title="xxxx音频"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
    <van-card  currency="" price="2分钟21秒" desc="九章算术" title="xxxx音频"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
    <van-card  currency="" price="2分钟21秒" desc="九章算术" title="xxxx音频"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
    </div>

  </div>
</template>


<style scoped>
.page-container {

  background-image: url('/src/static/img/abacus.jpg') !important;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  /* 设置相对定位，以便按钮可以使用绝对定位 */
  height: 100vh;
  /* 设置为视口高度，或根据需要调整 */
}

/* 直接覆盖 van-card 的样式 */
/* 直接覆盖 van-card 的背景颜色 */
.van-card {
  background-color: rgba(255, 255, 255, 0.5); /* 白色背景，50% 透明度 */
}

/* 或者，如果你想要可以复用的样式类，你可以创建一个新的类 */
.transparent-background {
  background-color: rgba(255, 255, 255, 0.5); /* 白色背景，50% 透明度 */
}
</style>