<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VSave from "../components/buttons/VSave.vue";

const URL = "http://localhost:5000/users";

const props = defineProps({
	profile: {
		type: Object,
		require: true,
	},
	id: {
		type: String,
		require: true,
	},
});

const newProfile = ref({
	nickname: "",
	age: "",
	gender: "",
});

// PUT
const update = async (new_profile) => {
	if (
		new_profile.nickname.length === 0 ||
		new_profile.age.length === 0 ||
		new_profile.gender.length === 0
	) {
		alert("update failed");
	} else {
		const res = await fetch(URL + "/" + props.id, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ profile: new_profile }),
		});
		alert(res.status === 200 ? "update successfully" : "update failed");
		goProfile();
	}
};

const appRouter = useRouter();

const goProfile = () => appRouter.go(-1);
</script>

<template>
	<div id="edit-detail">
		<div>
			<div>New nickname</div>
			<input
				type="text"
				:placeholder="profile.profile.nickname"
				v-model="newProfile.nickname"
			/>
		</div>
		<div>
			<div>New age</div>
			<input
				type="text"
				:placeholder="profile.profile.age"
				v-model="newProfile.age"
			/>
		</div>
		<div>
			<div>New gender</div>
			<select v-model="newProfile.gender">
				<option disabled value="">Please select gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>
		</div>
		<br />
		<VSave :profile="newProfile" @action="update" />
		<button type="button" @click.left="goProfile">Cancel</button>
	</div>
</template>

<style scoped></style>
