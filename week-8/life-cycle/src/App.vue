<script setup>
// created
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
import VButton from "./components/VButton.vue";
import VNumber from "./components/VNumber.vue";

const DEFAULT_COLOR = "#ffffff";
const DEFAULT_TEXT = "set me please";

const name = ref("");
const btnName = ref("");

const color = ref(DEFAULT_COLOR);
const btnColor = ref("");

const num = ref(1);
const hasUpdate = ref(true);

onBeforeMount(() => alert(`on before mount, ${DEFAULT_COLOR}`));
onMounted(() => alert(`on mounted, ${DEFAULT_COLOR}`));

onBeforeUpdate(() => {
	num.value = num.value > 2 ? 1 : num.value;
	alert(`on before update, ${num.value}, ${hasUpdate.value}`);
});
onUpdated(() => alert(`on updated, ${num.value}, ${hasUpdate.value}`));

const setButton = () => {
	[btnName.value, btnColor.value] = [name.value, color.value];
	name.value = "";
};

const resetButton = () => {
	[btnName.value, btnColor.value] = [DEFAULT_TEXT, DEFAULT_COLOR];
	[name.value, color.value] = ["", DEFAULT_COLOR];
};
</script>

<template>
	<div>
		<div id="input-section">
			<div id="input-name">
				<input
					type="text"
					v-model="name"
					placeholder="name your button here..."
				/>
			</div>
			<div id="input-color">
				<input type="color" v-model="color" />
			</div>
			<button type="button" @click.left="setButton">set</button>
			<button type="button" @click.left="resetButton">reset</button>
		</div>
		<VButton :text="btnName ? btnName : DEFAULT_TEXT" :color="btnColor" />
	</div>
	<div id="life-cycle">
		<div>
			<div>number: {{ num }}</div>
			<button type="button" @click.left="++num">increase</button>
		</div>
		<div>
			<VNumber :number="num" v-if="hasUpdate" />
			<button @click.left="hasUpdate = false">unmount</button>
		</div>
	</div>
</template>

<style></style>
