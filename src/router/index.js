import {createRouter, createWebHistory} from "vue-router";

import Index from "../views/Index.vue";
import Get from "../views/Get.vue";

const routes = [
    {
        path: "/", // 기본 경로
        name: "Index",
        component: Index,
    },
    {
        path: "/get", // 사용자 정보 보기 경로
        name: "Get",
        component: Get,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
