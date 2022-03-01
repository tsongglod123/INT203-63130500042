<script setup>
const emits = defineEmits(["whenClick"]);
const props = defineProps({
	btnName: { type: String, required: true },
});
</script>

<template>
	<button
		@click="
			$emit('whenClick', { text: 'UPDATE_ME', value: true, e: $event })
		"
	>
		{{ btnName }}
	</button>
</template>

<style scoped></style>
