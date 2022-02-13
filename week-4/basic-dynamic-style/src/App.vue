<script setup>
const invalidMessage = "red";
const italicText = "italic";
const blueText = "color: blue";
const greyText = "color: yellow";
const italicStyle = "font-style: italic";
</script>

<template>
	<input type="text" />
	<p :style="{ color: invalidMessage, 'font-style': italicText }">
		This is a text
	</p>
	<p :style="{ color: true ? 'green' : invalidMessage }">Red or Green</p>
	<p :style="[italicStyle, false ? greyText : blueText]">test 1</p>
	<p :class="['textUnderline', true ? 'normalMsg' : 'errorMsg']">test 2</p>
	<h1 class="text-3xl font-bold underline">Hello, Tailwind!</h1>
	<div class="d-inline-flex p-2 bd-highlight bg-info">Hello, Bootstrap!</div>
	<i class="bi bi-apple"></i>
	<i class="bi bi-bootstrap-fill"></i>
</template>

<style>
.errorMsg {
	color: red;
}

.normalMsg {
	color: rgb(177, 177, 177);
}

.textUnderline {
	text-decoration: underline;
}
</style>
