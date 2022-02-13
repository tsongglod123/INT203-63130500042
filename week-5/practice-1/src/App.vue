<script setup>
import { ref, reactive, computed } from "vue";

const finishedTasks = reactive([]);
const tasks = reactive([]);
const taskText = ref("");
const subHeaderStyle = ref(["sub-header-text", "sub-header-color"]);

const strikethrough = "text-decoration: line-through";

const buttons = {
	addTask() {
		if (taskText.value.length > 0) {
			tasks.push(taskText.value);
			taskText.value = "";
		}
	},
	delTask(index) {
		tasks.splice(index, 1);
	},
	checkTask(index) {
		let temp = tasks.splice(index, 1);
		finishedTasks.push(temp[0]);
	},
	delCheckedTask(index) {
		finishedTasks.splice(index, 1);
	},
	uncheckTask(index) {
		let temp = finishedTasks.splice(index, 1);
		tasks.push(temp[0]);
	},
};
</script>

<template>
	<div id="todo-list">
		<h1 class="text-3xl font-bold">TODO List</h1>
		<input
			type="text"
			placeholder="try swimming"
			v-model="taskText"
			@keyup.enter="buttons.addTask"
			class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		/>
		<button
			type="button"
			@click="buttons.addTask"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			Add
		</button>
		<h3 :class="subHeaderStyle">Tasks</h3>
		<div id="tasks">
			<table>
				<tr v-for="(task, index) in tasks" :key="index">
					<td>
						<button type="button" @click="buttons.checkTask(index)">
							<i class="bi bi-check-square"></i>
						</button>
					</td>
					<td>{{ task }}</td>
					<td>
						<button type="button" @click="buttons.delTask(index)">
							<i class="bi bi-trash"></i>
						</button>
					</td>
				</tr>
			</table>
		</div>
		<h3 :class="subHeaderStyle">Completed tasks</h3>
		<div id="finished-tasks" v-show="finishedTasks.length > 0">
			<table>
				<tr v-for="(finishedTask, index) in finishedTasks" :key="index">
					<td>
						<button
							type="button"
							@click="buttons.uncheckTask(index)"
						>
							<i class="bi bi-check-square-fill"></i>
						</button>
					</td>
					<td :style="strikethrough">
						{{ finishedTask }}
					</td>
					<td>
						<button
							type="button"
							@click="buttons.delCheckedTask(index)"
						>
							<i class="bi bi-trash"></i>
						</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style>
#app {
	padding: 32px;
	margin: 0auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.sub-header-text {
	@apply block font-bold;
}
.sub-header-color {
	@apply text-gray-700;
}
</style>
