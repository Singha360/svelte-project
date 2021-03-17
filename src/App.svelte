<script lang="ts">
	import { GameBoard, DiceContainer } from "./components";

	import { activeState, diceState } from "./store";

	function activate() {
		activeState.update((value) => {
			return !value;
		});
	}
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
		<button on:click="{activate}">
			{$activeState ? "Deactivate" : "Activate"}
		</button>
	</div>
	<div class="GameBoard">
		<GameBoard rows="{25}" columns="{24}" />
	</div>
	<DiceContainer />
</main>
