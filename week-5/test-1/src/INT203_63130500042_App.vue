<script setup>
import { ref } from "vue";
const boxes = ref([...Array(9).keys()]);
const randNumbers = ref([]);
const bingBoard = ref([]);

const errorMsg = ref(false);
const name = ref("Songglod Petchamras");
const strikethrough = ref("strikethrough");

// generates random number in range (1-99)
const generateNumber = () => {
	errorMsg.value = false;
	let duplicate = false;
	const rand = Math.floor(Math.random() * 99 + 1);
	duplicate = randNumbers.value.some((randNumber) => randNumber === rand);
	duplicate ? generateNumber() : randNumbers.value.push(rand);
};
const getNumber = (box) => {
	let lastNumber = randNumbers.value[randNumbers.value.length - 1];
	if (bingBoard.value.includes(lastNumber)) {
		errorMsg.value = true;
	} else {
		errorMsg.value = false;
		bingBoard.value[box] = lastNumber;
	}
};
</script>

<template>
	<div>
		<p>{{ name }}</p>
	</div>
	<div class="top-container">
		<div class="action-button">
			<button
				:disabled="randNumbers.length === 99"
				type="button"
				@click="generateNumber"
			>
				Generate New Number
			</button>
			<button @click="">Reset</button>
		</div>
		<div class="error-message">
			<div v-show="errorMsg">
				Sorry, your number is already exists in the bingo board, please
				generate a new number.
			</div>
		</div>
		<div class="grid-container">
			<div v-for="box in boxes" :key="box" class="grid-item">
				<template v-if="bingBoard[box] != null">
					<div>
						{{ bingBoard[box] }}
					</div>
				</template>
				<template v-else>
					<button
						:disabled="randNumbers.length === 0 ? true : false"
						type="button"
						@click="getNumber(box)"
					>
						Add Number
					</button>
				</template>
			</div>
		</div>
		<div class="generate-number">
			<ul>
				<li
					v-for="(number, index) in randNumbers"
					:key="index"
					:class="bingBoard.includes(number) ? strikethrough : ''"
				>
					Generate Number #{{ index + 1 }}: '{{ number }}'
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.strikethrough {
	color: red;
	text-decoration: line-through;
}
.top-container {
	width: 330px;
}
.action-button {
	padding: 10px;
	display: flex;
	gap: 5px;
}
.grid-container {
	display: grid;
	grid-template-columns: 100px 100px 100px;
	grid-template-rows: 80px 80px 80px;
	column-gap: 5px;
	row-gap: 5px;
	background-color: green;
	padding: 10px;
}
.grid-item {
	display: flex;
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.8);
	font-size: 30px;
	text-align: center;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.generate-number {
	font-size: 20px;
}
.error-message {
	height: 40px;
	color: red;
}
</style>
