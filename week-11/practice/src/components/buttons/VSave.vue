<script setup>
const props = defineProps({
	profile: {
		type: Object,
		require: true,
	},
});
const emits = defineEmits(["action"]);
</script>

<template>
	<button type="button" @click.left="$emit('action', profile)">Save</button>
</template>

<style scoped></style>
