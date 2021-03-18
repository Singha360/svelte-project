<script>
	import { diceState } from "../store";
	import { onMount } from "svelte";
	let sound = new Audio("../assets/sounds/public_roll.ogg");

	import Dice from "./Dice.svelte";

	export let numOfDice = 1;
	export let showButton = false;

	let active = false;

	let child = new Array(numOfDice);

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
</script>

<style>
	.DiceContainer {
		display: flex;
		justify-content: center;
		height: min-content;
		margin: 0px;
		padding: 5px;
		border: 5px;
		border-style: solid;
		border-color: black;
		border-radius: 20px;
	}
</style>

<div class="DiceContainer">
	{#each new Array(numOfDice) as _, id}
		<Dice id="{id}" value="{1}" clickable="{false}" bind:this="{child[id]}" />
	{/each}
</div>
{#if showButton}
	<button class="roll" on:click="{rollDice}">Roll</button>
{/if}
