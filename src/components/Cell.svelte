<script lang="ts">
	import { activeState } from "../store/store";

	let clicked = false;
	$: className = !clicked && $activeState ? "Cell" : "clickedCell";
	$: clicked ? console.log("Hi") : null;

	$: bgColor = clicked ? "#ff2a2a" : "brown";
	$: cursor = $activeState ? "pointer" : "not-allowed";

	function clickedCell() {
		if ($activeState) {
			clicked = !clicked;
		}
	}
</script>

<style>
	.Cell {
		z-index: 1;
		position: relative;
		border: 5px solid black;
		align-self: center;
		justify-self: center;
		height: 50px;
		width: 50px;
		background-color: var(--bgColor);
		cursor: var(--cursor);
	}

	.Cell:hover {
		z-index: 2;

		animation: pulse 400ms ease-in-out infinite alternate-reverse;
	}

	@keyframes pulse {
		from {
			height: 55px;
			width: 55px;
		}
		to {
			height: 60px;
			width: 60px;
			box-shadow: 0px 0px 15px 2px black;
		}
	}

	.Cell:hover:active {
		animation: active 75ms ease-in 1 both;
	}

	@keyframes active {
		to {
			background-color: #eb3434;
		}
	}

	.clickedCell {
		z-index: 1;
		position: relative;
		border: 5px solid black;
		align-self: center;
		justify-self: center;
		height: 50px;
		width: 50px;
		background-color: var(--bgColor);
		cursor: var(--cursor);
	}
</style>

<div
	class="{className}"
	on:click="{clickedCell}"
	style="--cursor:{cursor}; --bgColor:{bgColor};"
></div>
