import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/router.js'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router