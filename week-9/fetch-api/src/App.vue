<script setup>
import { ref, onBeforeMount } from "vue";
import VNoteList from "./components/VNoteList.vue";
import VAddEditNote from "./components/VAddEditNote.vue";

const URL = "http://localhost:5000/notes";
const notes = ref([]);

// GET
const getNotes = async (url) => {
	const res = await fetch(url);
	if (res.status === 200) {
		notes.value = await res.json();
	} else {
		console.log("not found");
	}
};

// DELETE
const deleteNote = async (deleted_id) => {
	const res = await fetch(URL + "/" + deleted_id, { method: "DELETE" });
	if (res.status === 200) {
		notes.value = notes.value.filter((note) => note.id !== deleted_id);
		console.log("deleted successfully");
	} else {
		console.log("deleted failed");
	}
};

// CREATE
const addNote = async (note_detail) => {
	const res = await fetch(URL, {
		method: "POST",
		headers: {
			"content-Type": "application/json",
		},
		body: JSON.stringify({ detail: note_detail }),
	});
	if (res.status === 201) {
		const newNote = await res.json();
		notes.value.push(newNote);
		console.log("OK");
	} else {
		console.log("ERROR");
	}
};

// EDIT
const editedNote = ref({});
const toEditField = (old_note) => {
	editedNote.value = old_note;
};

// PUT
const editNote = async (old_note) => {
	const res = await fetch(URL + "/" + old_note.id, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ detail: old_note.detail }),
	});
	if (res.status === 200) {
		const modifiedNote = await res.json();
		notes.value = notes.value.map((note) =>
			note.id === modifiedNote.id
				? { ...note, detail: modifiedNote.detail }
				: note
		);
		console.log("updated successfully");
	} else {
		console.log("failed to update");
	}
	editedNote.value = {};
};

onBeforeMount(async () => {
	await getNotes(URL);
	console.log(notes.value);
});
</script>

<template>
	<VAddEditNote @add="addNote" @update="editNote" :currentNote="editedNote" />
	<VNoteList :notes="notes" @delete="deleteNote" @edit="toEditField" />
</template>

<style></style>
