<script setup>
const emits = defineEmits(["edit", "delete"]);
const props = defineProps({
	notes: {
		type: Array,
		require: true,
	},
});
</script>

<template>
	<div id="notes">
		<h2>List</h2>
		<ul>
			<li v-for="(note, index) in notes" :key="index">
				{{ note.detail }}
				<button @click.left="$emit('edit', note)">edit</button>
				<button @click.left="$emit('delete', note.id)">delete</button>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
