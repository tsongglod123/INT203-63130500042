<script setup>
const props = defineProps({
	profile: {
		type: Object,
		require: true,
	},
});
</script>

<template>
	<div id="detail">
		<div v-for="(detail, key) in profile" :key="key">
			{{ key }}: {{ detail }}
		</div>
	</div>
</template>

<style scoped></style>
