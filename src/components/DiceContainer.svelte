<script>
	import { onMount } from "svelte";

	import { diceState } from "../store";
	let sound = new Audio("../assets/sounds/public_roll.ogg");

	import Dice from "./Dice.svelte";

	export let numberOfDice = 1;
	export let showButton = false;

	let active = false;

	let child = new Array(numberOfDice);

	function rollDice() {
		if (active === false) {
			active = !active;
			sound.play();
			child.forEach((element) => {
				element.rollDice();
			});
			setTimeout(() => {
				sound.pause();
				sound.currentTime = 0;
				active = !active;
				console.log(`Dice value: ${$diceState.value}`);
			}, 500);
		}
	}

	onMount(() => {
		if ($diceState.dice.length !== 0) {
			const tempSet = new Set();
			const tempArr = [];

			for (const die of $diceState.dice) {
				tempSet.add(JSON.stringify(die));
			}

			for (const die of tempSet) {
				tempArr.push(JSON.parse(die));
			}
			$diceState.dice = tempArr;
		}
	});
</script>

<style>
	.DiceContainer {
		display: flex;
		flex-direction: column;
	}

	.DiceBox {
		display: flex;
		height: min-content;
		width: min-content;
		margin: 0px;
		padding: 5px;
		border: 5px;
		border-style: solid;
		border-color: black;
		border-radius: 15px;
	}

	.Button {
		height: 50px;
		width: 100%;
		background-color: #ddc8c4;
		border: 2.5px;
		border-style: solid;
		border-color: #6b4d57;
		border-radius: 25px;
		outline: none;
	}

	.Button:active {
	}

	@keyframes clicked {
		to {
			height: 25px;
			width: 100%;
		}
	}

	.Value {
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>

<div class="DiceContainer">
	<div class="DiceBox">
		{#each new Array(numberOfDice) as _, id}
			<Dice
				id="{id}"
				value="{$diceState.dice[id] ? $diceState.dice[id].value : 1}"
				clickable="{showButton ? false : true}"
				bind:this="{child[id]}"
			/>
		{/each}
	</div>
	<div class="Value">
		{$diceState.value}
	</div>
	{#if showButton}
		<button class="Button" on:click="{rollDice}">Roll</button>
	{/if}
</div>
