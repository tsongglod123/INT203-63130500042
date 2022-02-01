<script setup>
import { ref, reactive, toRef, toRefs } from "vue";
// ref() for primitive
// reactive() for object and collection

const counter = ref(1);
setInterval(() => ++counter.value, 2000);

const msg = ref("Hello, world!");
setTimeout(() => (msg.value = "bye!"), 5000);

const course = reactive({
	id: "INT203",
	credit: 3,
});
console.log(course.id);
console.log(course.credit);

const numbers = reactive([1, 54, 2, 53, 674, 69, 13]);
console.log(numbers);
console.log(numbers[4]);

const cube = reactive({
	length: 10,
	width: 40,
	height: 22,
});
const length = toRef(cube, "length");
console.log(length.value);

const { width, height } = toRefs(cube);
console.log(width.value);
console.log(height.value);
</script>

<template>
	<h1 class="text-3xl font-bold underline">Hello, tailwind!</h1>
	<p class="display-1 lead">Hello, bootstrap</p>
	<p>count: {{ counter }}</p>
	<p>msg: {{ msg }}</p>
	<p>course: {{ course }}</p>
	<p>course id: {{ course.id }}</p>
	<p>course credit: {{ course.credit }}</p>
	<p>numbers: {{ numbers }}</p>
	<ul>
		<li v-for="number in numbers">{{ number }}</li>
	</ul>
</template>

<style></style>
