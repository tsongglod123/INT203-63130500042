<script setup>
const props = defineProps({
	username: {
		type: String,
		require: true,
	},
});
const emits = defineEmits(["function"]);
</script>

<template>
	<button type="button" @click.left="$emit('function', username)">Login</button>
</template>

<style scoped></style>
