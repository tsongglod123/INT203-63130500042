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
	<p :style="[italicStyle, false ? greyText : blueText]">
		asdasdasdlsdjnlsndv nsdjnvkjekuve
	</p>
	<p :class="['textUnderline', true ? 'normalMsg' : 'errorMsg']">
		nsdjnvkjekuve
	</p>
	<h1 class="text-3xl font-bold underline">Hello, Tailwind!</h1>
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
