<script lang="ts" name="Demo">
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';
export default {
  setup() {
    const router = useRouter();
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    const onClick = () => {
      router.push({ name: 'ConnectUs' }); // 使用你的目标路由路径
    };
    return { onClick,images  };
  },
};

</script>


<template>
  <van-swipe :autoplay="3000" lazy-render :height="100">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
  <div>
    <van-grid :column-num="3">
      <van-grid-item icon="home-o" text="九章算术" to="/nineChapters" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
      <van-grid-item icon="home-o" text="路由跳转" to="/" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
      <van-grid-item icon="home-o" text="路由跳转" to="/" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
      <van-grid-item icon="home-o" text="路由跳转" to="/" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
      <van-grid-item icon="home-o" text="路由跳转" to="/" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
      <van-grid-item icon="home-o" text="路由跳转" to="/" >
        <van-image
          src="/src/static/img/BookCover.png"
        />
      </van-grid-item>
    </van-grid>
  </div>

  <div class="floating-container">
    <van-floating-bubble icon="chat" @click="onClick" />
  </div>
</template>

<style>
:root {
  --van-primary-color: #B4A992;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background: var(--van-primary-color);
  --van-background-2:var(--van-gray-3) ;
}
.van-field {
  background-color: #f5f5f5; /* 将颜色值替换为您想要的颜色 */
}
.van-floating-bubble{
  background-color: #743703; 
}
.van-nav-bar {
  background-color: var(--van-primary-color);
}
.app-wrapper{
  background-color: #e0e0e0; 
}
</style>