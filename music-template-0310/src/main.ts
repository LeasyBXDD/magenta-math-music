import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
import 'vant/lib/index.css'
// svg icon
import "virtual:svg-icons-register";


import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");

import {Button,ConfigProvider } from 'vant';
createApp(App).
use(store).
use(router).
use(ConfigProvider).
use(Button).mount('#app')
