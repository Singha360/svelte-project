<script lang="ts">
	import Cell from "./Cell.svelte";
	import { bitBoard } from "../store";
	import { setContext } from "svelte";

	export let columns: number;
	export let rows: number;

	const board = bitBoard(rows, columns);

	setContext("board", $board);
</script>

<style>
	.GameBoard {
		padding: 10px;
		z-index: 0;
		display: grid;
		grid-auto-rows: 33px;
		grid-template-columns: repeat(var(--columns), 33px);
	}
</style>

<div class="GameBoard" style="--columns:{columns}">
	{#each $board as row, rowID}
		{#each row as _, columnID}
			<Cell
				id="{rowID.toString() + ':' + columnID.toString()}"
				inactiveColor="#ddc8c4"
				activeColor="#6b4d57"
			/>
		{/each}
	{/each}
</div>
