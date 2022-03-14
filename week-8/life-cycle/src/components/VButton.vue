<script setup>
const props = defineProps({
	text: {
		type: String,
		require: true,
	},
	color: {
		type: String,
		require: true,
	},
});
</script>

<template>
	<button type="button" class="btn-color">{{ text.toLowerCase() }}</button>
</template>

<style scoped>
.btn-color {
	background-color: v-bind(color);
}
</style>
