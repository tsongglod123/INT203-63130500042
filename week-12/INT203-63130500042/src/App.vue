<script setup></script>

<template>
	<div id="main">
		<div id="link">
			<router-link :to="{ name: 'StoryWriter63130500042' }">Story Writer</router-link>|
			<router-link :to="{ name: 'About63130500042' }">About Me</router-link>
		</div>
		<br />
		<router-view></router-view>
	</div>
</template>

<style></style>
