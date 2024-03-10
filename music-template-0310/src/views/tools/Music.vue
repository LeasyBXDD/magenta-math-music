<script lang="ts" name="Tools">
import { useRouter } from 'vue-router';
import PlaySvg from '@/icons/svg/play.svg'; // 导入SVG

export default {
  setup() {
    const router = useRouter();
    const onClicktoGenerate = () => {
      router.push({ name: 'Generate' }); // 使用你的目标路由路径
    };
    return { onClicktoGenerate };
  },
};
</script>

<template>
  <div class="page-container">


    <!-- Your other page content and the round button in the center -->
    <van-button round color="#7E3D00" class="center-button" @click="onClicktoGenerate">
      <van-icon size="50px" name="/src/icons/svg/play.svg" />
    </van-button>
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
.van-icon{
  transform: translateX(10%);
}
</style>