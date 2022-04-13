<script setup>
import { ref, computed } from "vue";
const props = defineProps({
	editStory: { type: Object },
});
const emits = defineEmits(["add", "update"]);

const isClick = ref(false);

const whenClick = () => {
	isClick.value = isClick.value ? false : true;
};

const newStory = computed(() => {
	return {
		id: props.editStory.id,
		title: props.editStory.title,
		story: props.editStory.story,
	};
});
</script>

<template>
	<div id="add-story">
		<button type="button" @click.left="whenClick" :disabled="isClick">
			Story Writer
		</button>
		<hr />
		<div v-show="isClick">
			<h1>Story Writer</h1>
			<div class="div-containter-input">
				<div class="div-input">
					<label>Title</label>
					<input
						type="text"
						placeholder="input your title here..."
						v-model="newStory.title"
					/>
				</div>
			</div>
			<div class="div-containter-input">
				<div class="div-input">
					<label>Story</label>
					<textarea
						cols="100"
						rows="10"
						placeholder="input your story here..."
						v-model="newStory.story"
					></textarea>
				</div>
			</div>
			<div>
				<button
					v-if="newStory.id > 0"
					style="margin-right: 10px"
					@click.left="$emit('update', newStory)"
				>
					Save
				</button>
				<button
					v-else
					style="margin-right: 10px"
					@click.left="$emit('add', newStory)"
				>
					Create
				</button>
				<button @click.left="whenClick">Cancel</button>
			</div>
			<hr />
		</div>
	</div>
</template>

<style scoped>
.div-contatiner-input {
	display: flex;
	flex-direction: column;
}
.div-input {
	display: flex;
	align-items: top;
}
</style>
