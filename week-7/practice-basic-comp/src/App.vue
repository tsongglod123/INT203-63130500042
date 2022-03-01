<script setup>
import { ref } from "vue";
import StudentProjects from "./components/StudentProjects.vue";

const studentProjects = ref([
	{
		"Git Repo": "umaporn-sup/INT203class",
		"Project Title": "Bingo Game",
	},
	{
		"Git Repo": "students/Sec2_Group1",
		"Project Title": "Flash Card",
	},
	{
		"Git Repo": "students/Sec3_Group2",
		"Project Title": "Tic Tac Toe",
	},
]);

const currentStatus = ref("");

const updateStatus = (status) => (currentStatus.value = status);
</script>

<template>
	<div>
		<h1>INT203 student projects</h1>
		<StudentProjects :repos="studentProjects" @confirm="updateStatus" />
		<p>current status: {{ currentStatus }}</p>
	</div>
</template>

<style></style>
