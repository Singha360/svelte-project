<script lang="ts">
	import { diceState } from "../store";
	import soundData from "../assets/sounds/public_roll.ogg";

	const sound = new Audio(soundData);

	export let id = 0;
	export let value = 1;
	export let clickable = true;

	let isActive = false;

	$diceState.dice.push({ id, value });

	let roll: NodeJS.Timeout;

	function onClick() {
		if (clickable) {
			sound.play();
			rollDice();
		}
	}

	export function rollDice() {
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
				$diceState.value = 0;
				sound.pause();
				sound.currentTime = 0;
				clearInterval(roll);
				for ({ value } of $diceState.dice) {
					$diceState.value += value;
				}
				if (clickable) {
					console.log(`Dice value: ${$diceState.value}`);
				}
				isActive = false;
			}, 500);
		}
	}
</script>

<style>
	.Dice {
		background-color: white;
		border-radius: 15px;
	}
</style>

<img
	class="Dice"
	id={id.toString()}
	src="/images/dice{value}.svg"
	alt="dice{value}"
	height={112}
	draggable={false}
	on:click={onClick} />
