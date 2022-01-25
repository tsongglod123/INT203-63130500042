<script setup>
defineProps({
	msg: String,
});

const imgPath = "../../public/images/cat.jfif";

const headingStyle = "color: green";
const text = "Hello, Student!";
const rawHTML = "<b><i>AJ Umaporn</i></b>";
const message = "";
const score = 60;

const subjects = ["INT201", "INT202", "INT203", "INT204"];
const authors = {
	id: "15618",
	firstName: "John",
	lastName: "Doe",
};

let counter = 1;
let isPresent = true;
</script>

<template>
	<img :src="imgPath" style="width: 200px; height: 200px" alt="AJ umaporn" />
	<h1 :style="headingStyle">{{ text }}</h1>
	<p v-html="rawHTML" v-show="isPresent"></p>
	<p v-show="!isPresent">test</p>
	<p>{{ counter }}</p>

	<!-- <input placeholder="edit me" id="input" type="text" /> -->
	<p v-show="!message">Please enter a message</p>

	<h1>Your score: {{ score }}</h1>
	<p v-if="score >= 85">Very good</p>
	<p v-else-if="score >= 75">Good</p>
	<p v-else-if="score >= 65">Fair</p>
	<p v-else>Need improvement</p>
	<!-- compare -->
	<p v-show="score >= 85">Very good</p>
	<p v-show="score >= 75">Good</p>
	<p v-show="score >= 65">Fair</p>
	<p v-show="score < 65">Need improvement</p>

	<!-- array -->
	<ul>
		<li v-for="(subject, index) in subjects" :key="index">
			{{ index }}: {{ subject }}
		</li>
	</ul>

	<!-- object -->
	<ul>
		<li v-for="(value, name, index) in authors" :key="authors.id">
			{{ index }} => {{ authors.id }}-{{ name }}: {{ value }}
		</li>
	</ul>
</template>

<style></style>
