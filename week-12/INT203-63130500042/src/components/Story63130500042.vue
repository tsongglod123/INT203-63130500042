<script setup>
const props = defineProps({
	stories: {
		type: [Object, Array],
	},
});
const emits = defineEmits(["edit", "delete"]);
</script>

<template>
	<div id="story-list">
		<div v-for="detail in stories" :key="detail.id">
			<div style="font-weight: bold">Title</div>
			<div>{{ detail.title }}</div>
			<div style="font-weight: bold">Story</div>
			<div>{{ detail.story }}</div>
			<button @click.left="$emit('edit', detail)">Edit</button>
			<button @click.left="$emit('delete', detail.id)">Delete</button>
			<hr />
		</div>
	</div>
</template>

<style scoped></style>
