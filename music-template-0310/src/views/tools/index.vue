<script lang="ts" name="Tools">
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const onClicktoMusic = () => {
      router.push({ name: 'Music' }); // 使用你的目标路由路径
    };
    return { onClicktoMusic };
  },
};
</script>

<template>
  <div class="page-container">
    <!-- Add a text title at the top of the page -->
    <div class="page-title">我的工具页面</div>

    <!-- Add a rectangle button above the round button -->
    <van-button type="primary" color="#7E3D00" class="rectangle-button top-button">上方按钮</van-button>

    <!-- Your other page content and the round button in the center -->
    <van-button round color="#7E3D00" class="center-button" @click="onClicktoMusic">按钮</van-button>

    <!-- Add a rectangle button below the round button -->
    <van-button type="primary" color="#7E3D00" class="rectangle-button bottom-button">下方按钮</van-button>
  </div>
</template>


<style scoped>
.page-container {
background-image: url('/src/static/img/abacus.jpg') !important;
background-size: cover;
background-attachment: fixed;
background-position: center center;
position: relative; /* 设置相对定位，以便按钮可以使用绝对定位 */
height: 100vh; /* 设置为视口高度，或根据需要调整 */
}

.page-title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -650%);
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  z-index: 10; /* Ensure that the title is above other elements */
}

/* Positioning the rectangle buttons */
.rectangle-button {
  position: fixed; /* Fixed position relative to the viewport */
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* Adjust the width as needed */
}

.top-button {
  top: calc(50% - 100px - 20px); /* Adjust the value as needed for spacing */
}

.bottom-button {
  top: calc(50% + 100px + 20px); /* Adjust the value as needed for spacing */
}

.center-button {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* 其他样式 */
}
.top-button, .bottom-button, .center-button {
  opacity: 0.8; /* 设置透明度为80% */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>