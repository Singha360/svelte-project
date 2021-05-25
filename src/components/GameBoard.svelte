<script lang="ts">
	import { bitBoard } from "../store";

	import Cell from "./Cell.svelte";

	export let columns: number;
	export let rows: number;

	$bitBoard = Array.from(Array(rows), () => new Array(columns).fill(0));

	function findPath() {}
</script>

<style>
	.GameBoard {
		z-index: 0;
		display: grid;
		grid-auto-rows: 33px;
		grid-template-columns: repeat(var(--columns), 33px);
		box-shadow: -10px 15px 10px rgba(0, 0, 0, 0.5);
	}
</style>

<div class="GameBoard" style="--columns:{columns}">
	{#each $bitBoard as row, rowID}
		{#each row as _, columnID}
			<Cell {rowID} {columnID} inactiveColor="#ddc8c4" activeColor="#6b4d57" />
		{/each}
	{/each}
</div>
