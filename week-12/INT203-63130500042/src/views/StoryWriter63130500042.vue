<script setup>
import AddStory from "../components/AddStory63130500042.vue";
import Story from "../components/Story63130500042.vue";
import { onBeforeMount, ref } from "vue";

const URL = "http://localhost:5000/stories";

const stories = ref([]); // for GET
const editStory = ref({});

// GET
const getStoryList = async (url) => {
	const res = await fetch(url);
	if (res.status == 200) {
		stories.value = await res.json();
	}
};

// POST
const createStory = async (new_story) => {
	const res = await fetch(URL, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(new_story),
	});
	if (res.status === 201) {
		const temp = await res.json();
		stories.value.push(temp);
	}
};

// DELETE
const deleteStory = async (id) => {
	const res = await fetch(URL + "/" + id, { method: "DELETE" });
	if (res.status === 200) {
		alert("delete?" + id);
		stories.value = stories.value.filter((story) => story.id !== id);
		console.log("deleted successfully");
	} else {
		console.log("deleted failed");
	}
};

const toEdit = (story) => (editStory.value = story);

// PUT
const updateStory = async (story) => {
	const res = await fetch(URL + "/" + story.id, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ title: story.title, story: story.story }),
	});
	if (res.status === 200) {
		const editedStory = await res.json();
		stories.value = stories.value.map((story) =>
			story.id === editedStory.id
				? { title: editedStory.title, story: editedStory.story }
				: story
		);
	}
	editStory.value = "";
};

onBeforeMount(async () => {
	await getStoryList(URL);
});
</script>

<template>
	<div id="story-writer">
		<AddStory
			@add="createStory"
			@update="updateStory"
			:editStory="editStory"
		/>
		<Story :stories="stories" @edit="toEdit" @delete="deleteStory" />
	</div>
</template>

<style scoped></style>
