import { createRouter, createWebHistory } from "vue-router";


const routes = [
{
	path: '/',
	name: "HomeDashBoard",
	component: () => import("@/admin/dashboard/HomeDashBoard.vue")
}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router