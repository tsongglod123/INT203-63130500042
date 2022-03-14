<script setup>
import { onBeforeUnmount, onUnmounted } from "vue";
const props = defineProps({
	number: {
		type: Number,
	},
});

onBeforeUnmount(() => alert("before unmount"));
onUnmounted(() => alert("unmounted"));
</script>

<template>
	<div>current number: {{ number }}</div>
</template>

<style scoped></style>
