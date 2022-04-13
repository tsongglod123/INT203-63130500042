import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "../views/AboutMe63130500042.vue";
import StoryWriter from "../views/StoryWriter63130500042.vue";

const history = createWebHistory();
const routes = [
	{
		path: "/", // homepage
		name: "StoryWriter63130500042",
		component: StoryWriter,
	},
	{
		path: "/about-63130500042",
		name: "About63130500042",
		component: AboutMe,
	},
];

const router = createRouter({ history, routes });

export default router;
