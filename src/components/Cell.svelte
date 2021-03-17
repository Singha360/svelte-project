<script lang="ts">
	import { getContext } from "svelte";
	import { activeState } from "../store";

	export let id = "";
	export let inactiveColor = "#fff";
	export let activeColor = "#000";

	const board = getContext("board") as number[][];

	export let clicked = false;

	$: className = !clicked && $activeState ? "Cell" : "clickedCell";

	$: bgColor = clicked ? activeColor : inactiveColor;
	$: cursor = $activeState ? "pointer" : "not-allowed";

	function clickedCell() {
		let [rowID, columnID] = id.split(":");
		if ($activeState && clicked === false) {
			clicked = !clicked;
			board[rowID][columnID] = 1;
		} else if ($activeState && clicked === true) {
			clicked = !clicked;
			board[rowID][columnID] = 0;
		}
		console.log(board);
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
	}

	.Cell:hover {
		z-index: 2;

		animation: pulse 350ms ease-in-out infinite alternate-reverse;
	}

	@keyframes pulse {
		from {
			height: 35px;
			width: 35px;
		}
		to {
			height: 40px;
			width: 40px;
			box-shadow: 0px 0px 15px 2px black;
		}
	}

	.Cell:hover:active {
		animation: active 100ms ease-in 1 both;
	}

	@keyframes active {
		to {
			background-color: var(--activeColor);
		}
	}

	.clickedCell {
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
	id="{id}"
	class="{className}"
	on:click="{clickedCell}"
	style="--cursor:{cursor}; --bgColor:{bgColor}; --activeColor:{activeColor}"
></div>
