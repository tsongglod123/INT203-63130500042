<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import VEditProfile from "../components/VEditProfile.vue";

const URL = "http://localhost:5000/users";

let { params } = useRoute();
const profile = ref({});

// GET
const getProfile = async (url, id) => {
	const res = await fetch(url + "/" + id);
	if (res.status === 200) {
		const user = await res.json();
		profile.value = user.profile;
	}
};

onBeforeMount(async () => {
	await getProfile(URL, params.id);
});
</script>

<template>
	<div id="edit-page">
		<h1>Edit</h1>
		<VEditProfile :profile="profile" :id="this.$route.params.id" />
	</div>
</template>

<style scoped></style>
