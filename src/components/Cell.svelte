<script lang="ts">
	import { gameState, bitBoard, diceState } from "../store";

	export let rowID = 0;
	export let columnID = 0;
	export let inactiveColor = "#fff";
	export let activeColor = "#000";
	export let highlight = false;

	$: playerActive = $gameState.playerActive;

	$: clicked = $bitBoard[rowID][columnID] ? true : false;

	$: className = !clicked && playerActive ? "Cell" : "Cell-Clicked";

	$: bgColor = clicked ? activeColor : inactiveColor;
	$: cursor = playerActive ? "pointer" : "not-allowed";

	function clickedCell() {
		console.log(`(${rowID}:${columnID})`);

		if (playerActive) {
			switch (clicked) {
				case false:
					$bitBoard[rowID][columnID] = 1;
					clicked = Boolean($bitBoard[rowID][columnID]);
					break;

				case true:
					$bitBoard[rowID][columnID] = 0;
					clicked = Boolean($bitBoard[rowID][columnID]);
					break;
			}

			console.log($bitBoard);
		}
	}
</script>

<style>
	.Cell {
		z-index: 1;
		position: relative;
		border: 1px solid black;
		align-self: center;
		justify-self: center;
		height: 32px;
		width: 32px;
		background-color: var(--bgColor);
		cursor: var(--cursor);
		filter: opacity(100%);
	}

	.Cell:hover {
		z-index: 2;
		transition: background-color 75ms ease-out;
		animation: pulse 300ms ease-in-out infinite alternate-reverse;
	}

	@keyframes pulse {
		from {
			height: 35px;
			width: 35px;
		}
		to {
			height: 40px;
			width: 40px;

			box-shadow: -5px 10px 15px 2px rgba(0, 0, 0, 0.5);
		}
	}

	.Cell:active {
		height: 32px;
		width: 32px;
		background-color: var(--activeColor);
		animation: none;
	}

	.Cell-Clicked {
		z-index: 1;
		position: relative;
		border: 1px solid black;
		align-self: center;
		justify-self: center;
		height: 32px;
		width: 32px;
		background-color: var(--bgColor);
		cursor: var(--cursor);
	}
</style>

<div
	id={`${rowID},${columnID}`}
	class={className}
	on:click={clickedCell}
	style="--cursor:{cursor}; --bgColor:{bgColor}; --activeColor:{activeColor}" />
