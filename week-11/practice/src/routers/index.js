import { createRouter, createWebHistory } from "vue-router";
import VAboutUs from "../views/VAboutUs.vue";
import VHome from "../views/VHome.vue";
import VNotFound from "../views/VNotFound.vue";
import VUsers from "../views/VUsers.vue";
import VRegisterPage from "../views/VRegisterPage.vue";
import VEditPage from "../views/VEditPage.vue";

const history = createWebHistory();
const routes = [
	{
		path: "/about-us",
		name: "about-us",
		component: VAboutUs,
	},
	{
		path: "/",
		name: "home",
		component: VHome,
	},
	{
		path: "/:catchNotMatchPath(.*)",
		name: "not-found",
		component: VNotFound,
	},
	{
		path: "/users/:id/profile",
		name: "user-profile",
		component: VUsers,
	},
	{
		path: "/users/:id/edit",
		name: "edit-profile",
		component: VEditPage,
	},
	{
		path: "/register",
		name: "register",
		component: VRegisterPage,
	},
];

const router = createRouter({ history, routes });

export default router;
