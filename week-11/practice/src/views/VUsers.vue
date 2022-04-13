<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import VProfile from "../components/VProfile.vue";

const URL = "http://localhost:5000/users";

let { params } = useRoute();
const appRouter = useRouter();
const profile = ref({});
// this.$route.params.id is for template

// GET
const getProfile = async (url, id) => {
	const res = await fetch(url + "/" + id);
	if (res.status === 200) {
		const user = await res.json();
		profile.value = user.profile;
	}
};

const goEdit = () =>
	appRouter.push({ name: "edit-profile", params: { id: params.id } });

const goHomepage = () => appRouter.push({ name: "home" });

onBeforeMount(async () => {
	await getProfile(URL, params.id);
});
</script>

<template>
	<div id="user-profile">
		<h1>Welcome {{ profile.nickname }}</h1>
		<VProfile :profile="profile" />
		<br />
		<button type="button" @click.left="goEdit">Edit</button>
		<button type="button" @click.left="goHomepage">Logout</button>
	</div>
</template>

<style scoped></style>
