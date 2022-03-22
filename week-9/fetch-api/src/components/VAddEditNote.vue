<script setup>
import { ref, computed } from "vue";

const emits = defineEmits(["add", "update"]);
const props = defineProps({
	currentNote: {
		type: Object,
		require: true,
		default: {},
	},
});

const note = computed(() => {
	return { id: props.currentNote.id, detail: props.currentNote.detail };
});
</script>

<template>
	<div id="create-notes">
		<h2>Add a new note</h2>
		<input type="text" v-model="note.detail" placeholder="Type here..." />
		<button v-if="note.id > 0" @click.left="$emit('update', note)">
			update
		</button>
		<button v-else @click.left="$emit('add', note.detail)">add</button>
	</div>
</template>

<style scoped></style>
