<script setup>
const props = defineProps({
	username: {
		type: String,
		require: true,
	},
});
const emits = defineEmits(["action"]);
</script>

<template>
	<button type="button" @click.left="$emit('action', username)">Login</button>
</template>

<style scoped></style>
