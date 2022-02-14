<script setup>
import { ref, reactive, computed } from "vue";

//data
const titles = reactive([
	{
		text: "Mister",
		value: "Mr.",
	},
	{
		text: "Miss",
		value: "Ms.",
	},
	{
		text: "Misses",
		value: "Mrs.",
	},
	{
		text: "Doctor",
		value: "Dr.",
	},
	{
		text: "Professor",
		value: "Prof.",
	},
]);

//variables
const selectedTitle = ref("");
const firstName = ref("");
const lastName = ref("");
const filteredFname = ref("");

//class & styles
const centerText = ref("center-text");
const tableSize = ref(["w50", "h100"]);
const alertTitle = ref("alert-title");

// array
const lists = reactive([]);

// functions
const submitForm = () => {
	if (firstName.value.length > 0 && lastName.value.length > 0) {
		lists.push({
			title: selectedTitle.value,
			firstName: firstName.value,
			lastName: lastName.value,
		});
		firstName.value = lastName.value = selectedTitle.value = "";
	}
};
const delPerson = (index) => lists.splice(index, 1);
const filteredLists = computed(() => {
	let temp = filteredFname.value.toLowerCase();
	return lists.filter((person) => person.firstName.toLowerCase().indexOf(temp) > -1);
})
</script>

<template>
	<h3>Simple form</h3>
	<div id="form">
		<div id="select-title">
			<label for="titles">Choose a title: </label>
			<select id="titles" v-model="selectedTitle">
				<option disabled value="">Please select</option>
				<option
					v-for="(title, index) in titles"
					:value="title.value"
					:key="index"
				>
					{{ title.text }}
				</option>
			</select>
		</div>
		<div id="input-first-name">
			<label for="first-name">First name: </label>
			<input
				id="first-name"
				type="text"
				placeholder="ex. Josh"
				v-model="firstName"
			/>
		</div>
		<div id="input-last-name">
			<label for="last-name">Last name: </label>
			<input
				id="last-name"
				type="text"
				placeholder="ex. Mao"
				v-model="lastName"
				@keyup.enter="submitForm"
			/>
		</div>
		<button type="button" @click="submitForm">Submit</button>
	</div>
	<div id="display" v-show="lists.length > 0">
		<br />
		<div id="filter-first-name">
			<label for="filtered-first-name">Filter (First name): </label>
			<input id="filtered-first-name" type="text" placeholder="ex. Jo" v-model="filteredFname" />
		</div>
		<table :class="tableSize">
			<thead>
				<tr>
					<th>No.</th>
					<th>Title</th>
					<th>First Name</th>
					<th>Last Name</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(person, index) in filteredLists"
					:key="index"
					:class="person.title.length < 1 ? alertTitle : ''"
				>
					<td :class="centerText">{{ index + 1 }}</td>
					<td :class="centerText">{{ person.title.length < 1 ? '<no title>' : person.title }}</td>
					<td>{{ person.firstName }}</td>
					<td>{{ person.lastName }}</td>
					<td>
						<button type="button" @click="delPerson(index)">
							x
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div>total: {{ filteredLists.length }}</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.center-text {
	text-align: center;
}
.alert-title {
	color: red;
	font-style: italic;
}
.w100 {
	width: 100%;
}
.h100 {
	height: 100%;
}
.w50 {
	width: 50%;
}
.h50 {
	height: 50%;
}
thead,
tbody {
	border-bottom: 1px solid black;
}
table {
	border-collapse: collapse;
}
</style>
