<script setup>
const props = defineProps({
	username: {
		type: String,
		require: true,
	},
	profile: {
		type: Object,
		require: true,
	},
});
const emits = defineEmits(["function"]);
</script>

<template>
	<div
		v-show="
			username.length === 0 ||
			profile.nickname.length === 0 ||
			profile.age.length === 0 ||
			profile.gender.length === 0
		"
		class="alert"
	>
		Please fill the form!
	</div>
	<button type="button" @click.left="$emit('function', { username, profile })">
		Register
	</button>
</template>

<style scoped>
.alert {
	color: red;
}
</style>
