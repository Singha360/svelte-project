<script lang="ts">
	import { diceState, gameState } from "./store";
	import { GameBoard, SidePanel } from "./components";
</script>

<style>
	:global(body) {
		background-color: #eafdf8;
		min-height: 100%;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.GameBoard {
		display: flex;
		justify-content: center;
	}
</style>

<main class="App">
	<div class="button">
		<input type="checkbox" bind:checked="{$gameState.playerActive}" />
		Activate Cells
	</div>
	<div class="button">
		<input type="checkbox" bind:checked="{$gameState.showPanel}" />
		Show Panel
	</div>
	<div class="GameBoard">
		<GameBoard rows="{25}" columns="{24}" />
	</div>
	<SidePanel />
</main>
