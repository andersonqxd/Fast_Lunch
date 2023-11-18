import { homePage } from '@/pages/homePage.vue';
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { 
    alias: "/", 
    path:'/produtos',
    component: homePage
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})