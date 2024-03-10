import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      },
      {
        path: "nineChapters",
        name: "NineChapters",
        component: () => import("@/views/book/NineChapters.vue"),
        meta: {
          title: "九章算术",
          noCache: true
        }
      },
      {
        path: "connectUs",
        name: "ConnectUs",
        component: () => import("@/views/about/ConnectUs.vue"),
        meta: {
          title: "联系我们",
          noCache: true
        }
      },
      {
        path: "music",
        name: "Music",
        component: () => import("@/views/tools/Music.vue"),
        meta: {
          title: "音乐",
          noCache: true
        }
      },
      {
        path: "generate",
        name: "Generate",
        component: () => import("@/views/tools/Generate.vue"),
        meta: {
          title: "生成",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
