<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VLogin from "../components/buttons/VLogin.vue";

const URL = "http://localhost:5000/users";

const appRouter = useRouter();
const username = ref("");
const userID = ref("");
const isMatch = ref(false);

// GET
const login = async (user_name) => {
	const res = await fetch(URL);
	if (res.status === 200) {
		const users = await res.json();
		users.forEach((user) => {
			if (user.username === user_name) {
				isMatch.value = true;
				userID.value = user.id;
			}
		});
	}
	if (isMatch.value) {
		alert("Login successful");
		appRouter.push({ name: "user-profile", params: { id: userID.value } });
	} else {
		alert("Not found, please sign up");
	}
	[username.value, userID.value] = ["", ""];
	isMatch.value = false;
};
</script>

<template>
	<div id="home">
		<h1>Home</h1>
		<div id="login">
			<div id="username-box">
				<input
					type="text"
					v-model.trim="username"
					placeholder="username"
					@keyup.enter="login($event.target.value)"
				/>
			</div>
			<VLogin :username="username" @function="login" />
		</div>
		<br />
		<div id="to-register">
			<div>
				Don't have an account?
				<router-link :to="{ name: 'register' }"> Sign up </router-link>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
