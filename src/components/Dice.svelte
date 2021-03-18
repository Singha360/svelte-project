<script lang="ts">
	import { diceState } from "../store";
	let sound = new Audio("../assets/sounds/public_roll.ogg");

	export let id = 0;
	export let value = 1;
	export let clickable = true;

	let isActive = false;

	$diceState.dice.push({ id, value });

	let roll: number;

	function onClick() {
		if (clickable) {
			sound.play();
			rollDice();
		}
	}

	export function rollDice() {
		$diceState.value = 0;

		if (!isActive) {
			isActive = true;
			roll = setInterval(() => {
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
	.Dice {
		background-color: white;
	}
</style>

<img
	class="Dice"
	id="{id.toString()}"
	src="../assets/images/dice{value}.svg"
	alt="dice{value}"
	height="{112}"
	draggable="{false}"
	on:click="{onClick}"
/>
