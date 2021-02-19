<script lang="ts">
	import Cell from "./Cell.svelte";

	export let columns: number;
	export let numOfCell: number;
</script>

<style>
	.GameBoard {
		padding: 10px;
		z-index: 0;
		position: fixed;
		display: grid;
		grid-auto-rows: 55px;
		grid-template-columns: repeat(var(--columns), 55px);
	}
</style>

<div class="GameBoard" style="--columns:{columns}">
	{#each Array(numOfCell) as _}
		<Cell />
	{/each}
</div>
