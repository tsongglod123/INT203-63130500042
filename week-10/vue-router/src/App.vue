<script setup></script>

<template>
	<div>
		<router-link :to="{ name: 'home' }">Home</router-link>|
		<router-link :to="{ name: 'about-us' }">About Us</router-link>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<style></style>
