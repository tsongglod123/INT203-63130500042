<script setup>
import { ref } from "vue";

const notes = ref([
	{
		id: 1,
		detail: "Hello",
	},
	{
		id: 2,
		detail: "Hi",
	},
	{
		id: 3,
		detail: "Hey",
	},
]);
</script>

<template>
	<div id="note-list">
		<ul v-for="(note, index) in notes" :key="index">
			<li>
				<router-link :to="{ name: 'note', params: { id: note.id } }">
					note ID: {{ note.id }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
