<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VRegister from "../components/buttons/VRegister.vue";

const URL = "http://localhost:5000/users";

const appRouter = useRouter();
const username = ref("");
const profile = ref({
	nickname: "",
	age: "",
	gender: "",
});

const goHomepage = () => appRouter.push({ name: "home" });

// POST
const register = async (user) => {
	if (
		user.username.length === 0 ||
		user.profile.nickname.length === 0 ||
		user.profile.age.length === 0 ||
		user.profile.gender.length === 0
	) {
		alert("register failed");
	} else {
		const res = await fetch(URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				username: user.username,
				profile: user.profile,
			}),
		});
		alert(res.status === 201 ? "register successfully" : "register failed");
		goHomepage();
	}
};
</script>

<template>
	<div id="register">
		<h1>Register</h1>
		<div id="form">
			<div id="username-box">
				<div>Username</div>
				<input
					type="text"
					v-model.trim="username"
					placeholder="username"
				/>
			</div>
			<br />
			<div id="nickname-box">
				<div>Nickname</div>
				<input
					type="text"
					v-model.trim="profile.nickname"
					placeholder="What is your nickname?"
				/>
			</div>
			<div id="age-box">
				<div>Age</div>
				<input
					type="text"
					v-model.trim="profile.age"
					placeholder="How old are you?"
				/>
			</div>
			<div id="gender-box">
				<div>Gender</div>
				<select v-model="profile.gender">
					<option disabled value="">Please select gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</div>
		</div>
		<br />
		<VRegister :username="username" :profile="profile" @action="register" />
		<button type="button" @click.left="goHomepage">Back</button>
	</div>
</template>

<style scoped></style>
