<script setup>
import { useRoute, useRouter } from "vue-router";
let { params } = useRoute();
const appRouter = useRouter();

const goBack = () => appRouter.go(-1);
const goAboutUs = () => appRouter.push({ name: "about-us" });
</script>

<template>
	<div id="note-info">
		<h2>Detail</h2>
		<p>Your selected note is {{ params.id }}</p>
		<button @click.left="goBack">Back</button>
		<button @click.left="goAboutUs">About Us</button>
	</div>
</template>

<style scoped></style>
