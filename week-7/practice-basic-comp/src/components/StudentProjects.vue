<script setup>
const emits = defineEmits(["confirm"]);
const props = defineProps({
	repos: {
		type: Array,
		require: true,
	},
});
</script>
<template>
	<div>
		<ul>
			<li v-for="(repo, index) in repos" :key="index">
				<p>
					<span style="font-weight: bold">
						{{ Object.keys(repo)[0] }}:
					</span>
					{{ repo[Object.keys(repo)[0]] }}
				</p>
				<p>
					<span style="font-weight: bold">
						{{ Object.keys(repo)[1] }}:
					</span>
					{{ repo[Object.keys(repo)[1]] }}
				</p>
			</li>
		</ul>
	</div>
	<div>
		<button @click.left="$emit('confirm', 'USER_CONFIRM')">Confirm</button>
	</div>
</template>

<style scoped></style>
