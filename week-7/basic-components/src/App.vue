<script setup>
import VButton from "./components/VButton.vue";

const alertText = (e) => {
	alert("Look at console.log");
	console.log(e);
};
</script>

<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<VButton btnName="function name" @whenClick="alertText" />
		<VButton btnName="no params" @whenClick="alertText()" />
		<VButton btnName="with params" @whenClick="alertText($event)" />
		<VButton
			btnName="TEST4"
			@whenClick="alertText($event, 'from App.vue')"
		/>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
