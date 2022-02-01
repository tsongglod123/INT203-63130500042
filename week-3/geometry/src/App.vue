<script setup>
import { ref, computed } from "vue";

let base = ref(0);
let height = ref(0);
// const result = ref(0);

// const area = () => (result.value = (1 / 2) * base * height);
const area = computed(() => (1 / 2) * base.value * height.value);
</script>

<template>
	<div>
		<h1>Area of the triangle</h1>
		<div>base: <input type="number" min="0" v-model="base" /></div>
		<div>height: <input type="number" min="0" v-model="height" /></div>
		<p>
			<b>area: {{ area }}</b>
		</p>
		<!-- <button type="button" @click="area">Compute</button> -->
	</div>
</template>

<style></style>
