<script setup>
import { ref, reactive, computed } from "vue";

const notes = reactive([]);
let noteText = ref("");
let filteredText = ref("");

const addNote = () => {
	if (noteText.value.length > 0) {
		notes.push(noteText.value);
		noteText.value = "";
	}
};
const filterNote = computed(() => {
	let text = filteredText.value.toLowerCase();
	return notes.filter((note) => note.toLowerCase().indexOf(text) > -1);
});
</script>

<template>
	<div id="filter" v-if="notes.length > 0">
		<label for="filtered-text">Filter note </label>
		<input type="text" id="filtered-text" v-model="filteredText" />
	</div>
	<div id="note-list">
		<ul>
			<li v-for="(note, index) in filterNote" :key="index">
				{{ note }}
			</li>
		</ul>
	</div>
	<div id="add-new-note">
		<label for="note">New note </label>
		<input
			type="text"
			id="note"
			placeholder="try &#34;Running&#34;"
			v-model="noteText"
			@keyup.enter="addNote"
		/>
		<button type="button" @click="addNote">Add note</button>
	</div>
</template>

<style></style>
