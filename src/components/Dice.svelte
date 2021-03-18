<script lang="ts">
	import { diceState } from "../store";

	let sound = new Audio("../assets/public_roll.ogg");

	export let id = 0;
	export let value = 1;
	let isActive = false;

	$diceState.dice.push({ id, value });

	let roll: number;

	function rollDice() {
		$diceState.value = 0;

		if (!isActive) {
			isActive = true;
			roll = setInterval(() => {
				sound.play();
				value = Math.floor(Math.random() * 6) + 1;
				$diceState.dice.forEach((dice) => {
					if (dice.id == id) {
						dice.value = value;
					}
				});
			}, 50);

			setTimeout(() => {
				sound.pause();
				sound.currentTime = 0;
				clearInterval(roll);
				for ({ value } of $diceState.dice) {
					$diceState.value += value;
				}
				isActive = false;
				console.log(`Dice value: ${$diceState.value}`);
			}, 500);
		}
	}
</script>

<style>
</style>

<img
	id="{id.toString()}"
	src="../assets/dice{value}.png"
	alt="dice{value}"
	on:click="{rollDice}"
/>
