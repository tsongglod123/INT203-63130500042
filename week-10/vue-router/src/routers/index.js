import { createRouter, createWebHistory } from "vue-router";
import VAboutUs from "../views/VAboutUs.vue";
import VHome from "../views/VHome.vue";
import VNotFound from "../views/VNotFound.vue";
import VNoteInfo from "../views/VNoteInfo.vue";

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
		path: "/notes/:id",
		name: "note",
		component: VNoteInfo,
	},
];

const router = createRouter({ history, routes });

export default router;
