<script setup>
const acc = [
	{
		name: "salary",
		amount: 10000,
	},
	{
		name: "rent",
		amount: -2500,
	},
	{
		name: "parking fee",
		amount: 0,
	},
	{
		name: "car fuel",
		amount: -600,
	},
	{
		name: "commission",
		amount: 5500,
	},
];
const nameStyle = "text-align: left";
const footerStyle = "font-weight: bold";
const marks = {
	green: "background-color: #96ffa6",
	red: "background-color: #ff9696",
};
</script>

<template>
	<h1>MY ACCOUNT</h1>
	<table class="center">
		<thead>
			<tr>
				<th>Name</th>
				<th>Amount</th>
			</tr>
		</thead>
		<tbody>
			<template v-for="value in acc">
				<tr v-if="value.amount !== 0">
					<td :style="nameStyle">{{ value.name }}</td>
					<td>
						<mark
							:style="value.amount > 0 ? marks.green : marks.red"
						>
							{{ value.amount }}
						</mark>
					</td>
				</tr>
			</template>
		</tbody>
		<tfoot :style="footerStyle">
			<tr>
				<td>Net total</td>
				<td>
					{{ acc.reduce((total, value) => total + value.amount, 0) }}
				</td>
			</tr>
		</tfoot>
	</table>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000000;
	margin-top: 60px;
}
.center {
	margin-left: auto;
	margin-right: auto;
}
table,
th,
td {
	border-collapse: collapse;
	width: 40%;
}
th {
	background-color: #f0f0f0;
}
thead {
	border: 1px solid #dadada;
}
</style>
